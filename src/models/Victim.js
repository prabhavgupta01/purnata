const mongoose = require('mongoose');

const victimSchema = new mongoose.Schema({
  victimId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['female', 'child'],
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 120,
  },
  history: {
    type: String,
    required: true,
  },
  medicalHistory: {
    type: String,
    required: true,
  },
  rehabConsent: {
    type: Boolean,
    required: true,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
  registeredBy: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'rehabilitated', 'reintegrated'],
    default: 'active',
  }
});

module.exports = mongoose.model('Victim', victimSchema); 