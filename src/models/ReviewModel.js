const mongoose = require('mongoose');

// Define the schema for the Review model
const reviewSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // Assuming there is a Product model for the products
    required: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  des: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
});

// Create the Review model
const ReviewModel = mongoose.model('Review', reviewSchema);

module.exports = ReviewModel;
