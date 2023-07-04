const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route for adding a product
router.post('/', productController.addProduct);

module.exports = router;
