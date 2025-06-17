const mongoose = require('mongoose');

const reIntegrationSchema = new mongoose.Schema({
  victimId: {
    type: String,
    required: true,
    ref: 'Victim'
  },
  rehabDuration: {
    type: String,
    required: true,
    enum: ['0-3', '3-6', '6-12', '12+']
  },
  interests: [{
    type: String,
    required: true
  }],
  healthCondition: {
    type: String,
    required: true,
    enum: ['Excellent', 'Good', 'Fair', 'Poor']
  },
  mentalHealthCondition: {
    type: String,
    required: true,
    enum: ['Excellent', 'Good', 'Fair', 'NeedsCounseling']
  },
  skillsAcquired: [{
    type: String
  }],
  supportRequired: {
    type: String
  },
  familyContact: {
    type: String,
    required: true,
    enum: ['Established', 'InProgress', 'NotPossible', 'Refused']
  },
  readinessLevel: {
    type: String,
    required: true,
    enum: ['Ready', 'NeedsPreparation', 'NotReady']
  },
  assessmentDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'InProgress', 'Completed']
  }
});

module.exports = mongoose.model('ReIntegration', reIntegrationSchema); 