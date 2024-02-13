const mongoose = require('mongoose');

// Define the schema for the PaymentSettings model
const paymentSettingsSchema = new mongoose.Schema({
  store_id: {
    type: String,
    required: true
  },
  store_passwd: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  success_url: {
    type: String,
    required: true
  },
  fail_url: {
    type: String,
    required: true
  },
  cancel_url: {
    type: String,
    required: true
  },
  ipn_url: {
    type: String,
    required: true
  },
  init_url: {
    type: String,
    required: true
  }
});

// Create the PaymentSettings model
const PaymentSettingModel = mongoose.model('PaymentSettings', paymentSettingsSchema);

module.exports = PaymentSettingModel;
