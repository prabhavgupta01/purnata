const express = require('express');
const router = express.Router();
const ReIntegration = require('../models/ReIntegration');

// Create a new re-integration assessment
router.post('/', async (req, res) => {
  try {
    const reIntegration = new ReIntegration(req.body);
    await reIntegration.save();
    res.status(201).json({ message: 'Re-integration assessment created successfully', data: reIntegration });
  } catch (error) {
    console.error('Error creating re-integration assessment:', error);
    res.status(500).json({ message: 'Failed to create re-integration assessment', error: error.message });
  }
});

// Get all re-integration assessments
router.get('/', async (req, res) => {
  try {
    const assessments = await ReIntegration.find().sort({ assessmentDate: -1 });
    res.json(assessments);
  } catch (error) {
    console.error('Error fetching re-integration assessments:', error);
    res.status(500).json({ message: 'Failed to fetch re-integration assessments', error: error.message });
  }
});

// Get a specific re-integration assessment
router.get('/:id', async (req, res) => {
  try {
    const assessment = await ReIntegration.findById(req.params.id);
    if (!assessment) {
      return res.status(404).json({ message: 'Re-integration assessment not found' });
    }
    res.json(assessment);
  } catch (error) {
    console.error('Error fetching re-integration assessment:', error);
    res.status(500).json({ message: 'Failed to fetch re-integration assessment', error: error.message });
  }
});

// Update a re-integration assessment
router.put('/:id', async (req, res) => {
  try {
    const assessment = await ReIntegration.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!assessment) {
      return res.status(404).json({ message: 'Re-integration assessment not found' });
    }
    res.json({ message: 'Re-integration assessment updated successfully', data: assessment });
  } catch (error) {
    console.error('Error updating re-integration assessment:', error);
    res.status(500).json({ message: 'Failed to update re-integration assessment', error: error.message });
  }
});

// Delete a re-integration assessment
router.delete('/:id', async (req, res) => {
  try {
    const assessment = await ReIntegration.findByIdAndDelete(req.params.id);
    if (!assessment) {
      return res.status(404).json({ message: 'Re-integration assessment not found' });
    }
    res.json({ message: 'Re-integration assessment deleted successfully' });
  } catch (error) {
    console.error('Error deleting re-integration assessment:', error);
    res.status(500).json({ message: 'Failed to delete re-integration assessment', error: error.message });
  }
});

module.exports = router; 