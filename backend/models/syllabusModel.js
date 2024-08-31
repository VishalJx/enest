const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    lectures: [lectureSchema] // Array of lectures
});

const syllabusSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    sections: [sectionSchema] // Array of sections
});

const Syllabus = mongoose.model('Syllabus', syllabusSchema);

module.exports = Syllabus;
