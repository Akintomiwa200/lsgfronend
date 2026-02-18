import express from 'express';
import { createQuotation, getAllQuotations } from '../controllers/quotationController.js';

const router = express.Router();

export default (io) => {
    /**
     * @openapi
     * /api/quotations:
     *   post:
     *     description: Create a new quotation
     *     responses:
     *       201:
     *         description: Success
     */
    router.post('/', createQuotation(io));

    /**
     * @openapi
     * /api/quotations:
     *   get:
     *     description: Get all quotations
     *     responses:
     *       200:
     *         description: Success
     */
    router.get('/', getAllQuotations);

    return router;
};
