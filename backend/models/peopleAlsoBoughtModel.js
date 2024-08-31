const mongoose = require('mongoose');

const peopleAlsoBoughtSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    courseInstructor: {
        type: String,
        required: true
    },
    coursePrice: {
        type: Number,
        required: true
    }
});

const PeopleAlsoBought = mongoose.model('PeopleAlsoBought', peopleAlsoBoughtSchema);

module.exports = PeopleAlsoBought;