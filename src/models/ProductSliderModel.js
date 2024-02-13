const mongoose = require('mongoose');

// Define the schema for the ProductSlider model
const productSliderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  des: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String, // Assuming the image will be stored as a URL
    required: true
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

// Create the ProductSlider model
const ProductSliderModel = mongoose.model('ProductSlider', productSliderSchema);

module.exports = ProductSliderModel;
