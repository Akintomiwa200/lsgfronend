import Quotation from '../models/Quotation.js';

export const createQuotation = (io) => async (req, res) => {
    try {
        const quotationData = req.body;
        const newQuotation = new Quotation(quotationData);
        await newQuotation.save();

        // Emit real-time event
        io.emit('newQuotation', newQuotation);

        res.status(201).json({ message: 'Quotation saved successfully', data: newQuotation });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save quotation', details: error.message });
    }
};

export const getAllQuotations = async (req, res) => {
    try {
        const quotations = await Quotation.find().sort({ createdAt: -1 });
        res.status(200).json(quotations);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quotations', details: error.message });
    }
};
