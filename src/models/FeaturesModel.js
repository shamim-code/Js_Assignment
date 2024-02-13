const mongoose = require('mongoose');

// Define the schema for the Feature model
const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String, // Assuming the image will be stored as a URL
    required: true
  }
});

// Create the Feature model
const FeaturesModel = mongoose.model('Feature', featureSchema);

module.exports = FeaturesModel;
