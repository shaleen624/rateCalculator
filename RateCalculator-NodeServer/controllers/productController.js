const Product = require('../models/product');

// Controller function for adding a product
exports.addProduct = async (req, res) => {
  try {
    const productData = req.body;

    // Perform any additional validation if needed

    // Create a new product document
    const newProduct = new Product(productData);

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ success: true, message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add product', error });
  }
};
