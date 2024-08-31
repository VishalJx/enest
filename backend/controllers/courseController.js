const Course = require('../models/courseModel');

exports.getCourseDetails = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
