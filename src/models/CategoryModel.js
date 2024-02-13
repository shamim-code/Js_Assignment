const mongoose = require('mongoose');

// Define the schema for the Category model
const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  categoryImg: {
    type: String, // Assuming the image will be stored as a URL
    required: true
  }
});

// Create the Category model
const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
