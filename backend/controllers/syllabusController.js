const Syllabus = require('../models/syllabusModel');

exports.getSyllabus = async (req, res) => {
    try {
        const syllabus = await Syllabus.find();
        res.json(syllabus);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};