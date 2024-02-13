const mongoose = require('mongoose');

// Define the schema for the Cart model
const cartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    required: true
  }
});

// Create the Cart model
const CartModel = mongoose.model('Cart', cartSchema);

module.exports = CartModel;
