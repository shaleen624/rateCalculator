const mongoose = require('mongoose');

const productFieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  required: {
    type: Boolean,
    required: true
  }
}, { collection: 'productFields' });

const ProductField = mongoose.model('ProductField', productFieldSchema);

module.exports = ProductField;
