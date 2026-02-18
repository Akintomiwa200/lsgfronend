import express from 'express';
import { createBuyer, getAllBuyers } from '../controllers/buyerController.js';

const router = express.Router();

export default (io) => {
    router.post('/', createBuyer(io));
    router.get('/', getAllBuyers);
    return router;
};
