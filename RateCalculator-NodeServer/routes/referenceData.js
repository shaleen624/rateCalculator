const express = require('express');
const router = express.Router();
const referenceDataController = require('../controllers/referenceDataController');

// Get all reference data
router.get('/', referenceDataController.getAllReferenceData);

// Get a specific reference data by ID
router.get('/:id', referenceDataController.getReferenceDataById);

// Create new reference data
router.post('/', referenceDataController.createReferenceData);

// Update a reference data by ID
router.put('/:id', referenceDataController.updateReferenceData);

// Delete a reference data by ID
router.delete('/:id', referenceDataController.deleteReferenceData);

module.exports = router;
