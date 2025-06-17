const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    staffId: { type: String, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    department: { type: String, required: true },
    phone: { type: String, required: true },
    officeLocation: { type: String, required: true },
    avatar: { type: String },
    victimsCount: { type: Number, default: 0 },
    casesResolved: { type: Number, default: 0 },
    yearsOfService: { type: Number, default: 0 },
    activeCases: { type: Number, default: 0 },
    totalCases: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema); 