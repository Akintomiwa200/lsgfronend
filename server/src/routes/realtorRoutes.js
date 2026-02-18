import express from 'express';
import { createRealtor, getAllRealtors } from '../controllers/realtorController.js';

const router = express.Router();

export default (io) => {
    router.post('/', createRealtor(io));
    router.get('/', getAllRealtors);
    return router;
};
