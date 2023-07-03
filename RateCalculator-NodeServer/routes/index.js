const express = require('express');
const router = express.Router();
const referenceDataRouter = require('./referenceData');
const referenceDataHistoryRouter = require('./referenceDataHistory');

// Root route
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.get('/abc', (req, res) => {
  res.send('Hello, World!');
});

// Reference Data routes
router.use('/reference-data', referenceDataRouter);
router.use('/reference-data-history', referenceDataHistoryRouter);

module.exports = router;
