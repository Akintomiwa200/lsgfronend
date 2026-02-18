import Buyer from '../models/Buyer.js';

export const createBuyer = (io) => async (req, res) => {
    try {
        const buyerData = req.body;
        const newBuyer = new Buyer(buyerData);
        await newBuyer.save();

        // Emit real-time event
        io.emit('newBuyer', newBuyer);

        res.status(201).json({ message: 'Buyer request saved successfully', data: newBuyer });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save buyer request', details: error.message });
    }
};

export const getAllBuyers = async (req, res) => {
    try {
        const buyers = await Buyer.find().sort({ createdAt: -1 });
        res.status(200).json(buyers);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch buyer requests', details: error.message });
    }
};
