const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: {
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

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
