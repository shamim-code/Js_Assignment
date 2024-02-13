const mongoose = require('mongoose');

// Define the schema for the Brand model
const brandSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true
  },
  brandImg: {
    type: String, // Assuming the image will be stored as a URL
    required: true
  }
});

// Create the Brand model
const BrandModel = mongoose.model('Brand', brandSchema);

module.exports = BrandModel;
