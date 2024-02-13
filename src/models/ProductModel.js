const mongoose = require('mongoose');

// Define the schema for the Product model
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  shortDes: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0 // Assuming default discount is 0%
  },
  discountPrice: {
    type: Number,
    default: function() {
      return this.price - (this.price * this.discount / 100); // Calculate discount price based on the price and discount
    }
  },
  image: {
    type: String, // Assuming the image will be stored as a URL
    required: true
  },
  star: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  remark: {
    type: String,
    required: true
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  brandID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

// Create the Product model
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
