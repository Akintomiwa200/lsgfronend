import mongoose from 'mongoose';

const BuyerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    plots: { type: String, required: true },
    purpose: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Buyer', BuyerSchema);
