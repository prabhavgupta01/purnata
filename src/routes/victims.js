const express = require('express');
const router = express.Router();
const Victim = require('../models/Victim');

// Create a new victim
router.post('/', async (req, res) => {
  try {
    const victim = new Victim({
      ...req.body,
      registeredBy: req.user?.userId || 'admin' // In production, this should come from authenticated user
    });
    await victim.save();
    res.status(201).json({ message: 'Victim registered successfully', victim });
  } catch (error) {
    if (error.code === 11000) { // Duplicate key error
      res.status(400).json({ message: 'Victim ID already exists' });
    } else {
      console.error('Error registering victim:', error);
      res.status(500).json({ message: 'Error registering victim', error: error.message });
    }
  }
});

// Get all victims
router.get('/', async (req, res) => {
  try {
    const victims = await Victim.find();
    res.json(victims);
  } catch (error) {
    console.error('Error fetching victims:', error);
    res.status(500).json({ message: 'Error fetching victims', error: error.message });
  }
});

// Get a specific victim by ID
router.get('/:victimId', async (req, res) => {
  try {
    const victim = await Victim.findOne({ victimId: req.params.victimId });
    if (!victim) {
      return res.status(404).json({ message: 'Victim not found' });
    }
    res.json(victim);
  } catch (error) {
    console.error('Error fetching victim:', error);
    res.status(500).json({ message: 'Error fetching victim', error: error.message });
  }
});

// Update a victim's status
router.patch('/:victimId/status', async (req, res) => {
  try {
    const { status } = req.body;
    const victim = await Victim.findOneAndUpdate(
      { victimId: req.params.victimId },
      { status },
      { new: true }
    );
    if (!victim) {
      return res.status(404).json({ message: 'Victim not found' });
    }
    res.json(victim);
  } catch (error) {
    console.error('Error updating victim status:', error);
    res.status(500).json({ message: 'Error updating victim status', error: error.message });
  }
});

module.exports = router; 