import Contact from '../models/Contact.js';

export const createContact = (io) => async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        // Emit real-time event
        io.emit('newContact', newContact);

        res.status(201).json({ message: 'Contact message saved successfully', data: newContact });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save contact message', details: error.message });
    }
};

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contact messages', details: error.message });
    }
};
