const mongoose = require('mongoose');

// Define the schema for the Wish model
const wishSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

// Create the Wish model
const WishModel = mongoose.model('Wish', wishSchema);

module.exports = WishModel;
