import mongoose from 'mongoose';

const RealtorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    agency: { type: String, required: true },
    experience: { type: String, required: true },
    specialization: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Realtor', RealtorSchema);
