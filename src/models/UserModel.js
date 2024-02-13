const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  otp: {
    type: String,
    required: true
  }
});

// Create the User model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
