const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    instructorId: {
        type: String,
        required: true
    },
    instructorName: {
        type: String,
        required: true
    },
    instructorTitle: {
        type: String,
        required: true
    },
    instructorDescription: {
        type: String,
        required: true
    },
    instructorImage: {
        type: String,
        required: true
    }
});

const instructor = mongoose.model('instructor', instructorSchema);

module.exports = instructor;