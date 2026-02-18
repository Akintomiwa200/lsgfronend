import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// MVC Imports
import contactRoutes from './src/routes/contactRoutes.js';
import quotationRoutes from './src/routes/quotationRoutes.js';
import buyerRoutes from './src/routes/buyerRoutes.js';
import realtorRoutes from './src/routes/realtorRoutes.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LSG Backend API',
      version: '1.0.0',
      description: 'API documentation for the LSG real-time backend',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./index.js', './src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lsg';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/contacts', contactRoutes(io));
app.use('/api/quotations', quotationRoutes(io));
app.use('/api/buyers', buyerRoutes(io));
app.use('/api/realtors', realtorRoutes(io));

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to LSG Backend
 *     responses:
 *       200:
 *         description: Returns a success message.
 */
app.get('/', (req, res) => {
  res.send('LSG Backend is running with MVC 🚀');
});

/**
 * @openapi
 * /api/health:
 *   get:
 *     description: Check server health
 *     responses:
 *       200:
 *         description: Returns health status.
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is healthy', timestamp: new Date() });
});

// Socket.io Connection Logic
io.on('connection', (socket) => {
  console.log('🔌 A user connected:', socket.id);
  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('💥 Error:', err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`📡 Server running on port ${PORT}`);
});
