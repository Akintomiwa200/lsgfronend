import mongoose from 'mongoose';

const QuotationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    propertyType: { type: String },
    details: { type: String },
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Quotation', QuotationSchema);
