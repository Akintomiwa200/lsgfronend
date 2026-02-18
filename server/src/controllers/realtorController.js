import Realtor from '../models/Realtor.js';

export const createRealtor = (io) => async (req, res) => {
    try {
        const realtorData = req.body;
        const newRealtor = new Realtor(realtorData);
        await newRealtor.save();

        // Emit real-time event
        io.emit('newRealtor', newRealtor);

        res.status(201).json({ message: 'Realtor registration saved successfully', data: newRealtor });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save realtor registration', details: error.message });
    }
};

export const getAllRealtors = async (req, res) => {
    try {
        const realtors = await Realtor.find().sort({ createdAt: -1 });
        res.status(200).json(realtors);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch realtor registrations', details: error.message });
    }
};
