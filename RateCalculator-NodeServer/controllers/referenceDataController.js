const ReferenceData = require('../models/referenceData');

// Get all reference data
exports.getAllReferenceData = async (req, res) => {
  try {
    console.log('getAllReferenceData called');
    const referenceData = await ReferenceData.find();
    res.json(referenceData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a specific reference data by ID
exports.getReferenceDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const referenceData = await ReferenceData.findById(id);
    
    if (!referenceData) {
      return res.status(404).json({ error: 'Reference data not found' });
    }
    
    res.json(referenceData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create new reference data
exports.createReferenceData = async (req, res) => {
  try {
    const {  item, rate, unit } = req.body;
    const newReferenceData = new ReferenceData({ item, rate, unit });
    const savedReferenceData = await newReferenceData.save();
    res.json(savedReferenceData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' , errorDetails: error});
  }
};

// Update a reference data by ID
exports.updateReferenceData = async (req, res) => {
  try {
    const id = req.params.id;
    const { item, rate, unit } = req.body;

    const updatedReferenceData = await ReferenceData.findByIdAndUpdate(id, { item, rate, unit }, { new: true });

    if (!updatedReferenceData) {
      return res.status(404).json({ error: 'Reference data not found' });
    }

    res.json(updatedReferenceData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a reference data by ID
exports.deleteReferenceData = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedReferenceData = await ReferenceData.findByIdAndDelete(id);

    if (!deletedReferenceData) {
      return res.status(404).json({ error: 'Reference data not found' });
    }

    res.json({ message: 'Reference data deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
