const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be at least 2 characters long']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be at least 2 characters long']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Date of birth is required'],
        
    },
    placeOfBirth: {
        type: String,
        required: [true, 'Place of birth is required'],
        minlength: [2, 'Place of birth must be at least 2 characters long']
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
        default: 'female'
    },
    nationality: {
        type: String,
        required: [true, 'Nationality is required'],
        enum: ['Ugandan', 'South Sudanese', 'Congolese', 'Somali']
    },
    maritalStatus: {
        type: String,
        required: [true, 'Marital status is required'],
        enum: ['Single', 'Married', 'Divorced']
    },
    settlementCamp: {
        type: String,
        required: [true, 'Settlement camp is required'],
        enum: ['Bidi Bidi', 'Nakivale', 'Rhino Camp']
    },
    dateOfJoining: {
        type: Date,
        required: [true, 'Date of joining is required'],
        
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);