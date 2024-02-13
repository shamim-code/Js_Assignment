const mongoose = require('mongoose');

// Define the schema for the InvoiceProduct model
const invoiceProductSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  invoiceID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  }
});

// Create the InvoiceProduct model
const InvoiceProductModel = mongoose.model('InvoiceProduct', invoiceProductSchema);

module.exports = InvoiceProductModel;
