const Instructor = require('../models/instructorModel');

const getInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);
        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }
        res.json(instructor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getInstructorById
};
