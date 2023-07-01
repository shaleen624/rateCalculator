const express = require('express');
const router = express.Router();
const referenceDataController = require('../controllers/referenceDataController');

// Get all reference data
router.get('/reference-data', referenceDataController.getAllReferenceData);

// Get a specific reference data by ID
router.get('/reference-data/:id', referenceDataController.getReferenceDataById);

// Create new reference data
router.post('/reference-data', referenceDataController.createReferenceData);

// Update a reference data by ID
router.put('/reference-data/:id', referenceDataController.updateReferenceData);

// Delete a reference data by ID
router.delete('/reference-data/:id', referenceDataController.deleteReferenceData);

module.exports = router;
