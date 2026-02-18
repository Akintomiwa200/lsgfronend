import axios from 'axios';
import { io } from 'socket.io-client';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const socket = io(SOCKET_URL);

export const contactService = {
    create: (data) => api.post('/contacts', data),
    getAll: () => api.get('/contacts'),
};

export const quotationService = {
    create: (data) => api.post('/quotations', data),
    getAll: () => api.get('/quotations'),
};

export const buyerService = {
    create: (data) => api.post('/buyers', data),
    getAll: () => api.get('/buyers'),
};

export const realtorService = {
    create: (data) => api.post('/realtors', data),
    getAll: () => api.get('/realtors'),
};

export default api;
