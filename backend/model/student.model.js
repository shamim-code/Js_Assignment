const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    admissionDate: {
        type: String,
        required: true,
    },
    courses: {
        type: String,
        required: true,
    },


});


const studentModel = mongoose.model('users', studentSchema);

module.exports = studentModel;