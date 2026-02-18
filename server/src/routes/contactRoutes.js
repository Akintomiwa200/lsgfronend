import express from 'express';
import { createContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

export default (io) => {
    /**
     * @openapi
     * /api/contacts:
     *   post:
     *     description: Create a new contact message
     *     responses:
     *       201:
     *         description: Success
     */
    router.post('/', createContact(io));

    /**
     * @openapi
     * /api/contacts:
     *   get:
     *     description: Get all contact messages
     *     responses:
     *       200:
     *         description: Success
     */
    router.get('/', getAllContacts);

    return router;
};
