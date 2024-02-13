const mongoose = require('mongoose');

// Define the schema for the ProductDetails model
const productDetailsSchema = new mongoose.Schema({
  img1: {
    type: String,
    required: true
  },
  img2: {
    type: String,
    required: true
  },
  img3: {
    type: String,
    required: true
  },
  img4: {
    type: String,
    required: true
  },
  des: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Assuming there is a Product model for the products
    required: true
  }
});

// Create the ProductDetails model
const ProductDetailsModel = mongoose.model('ProductDetails', productDetailsSchema);

module.exports = ProductDetailsModel;
