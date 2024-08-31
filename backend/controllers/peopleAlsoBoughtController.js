const PeopleAlsoBought = require('../models/peopleAlsoBoughtModel');

exports.getPeopleAlsoBought = async (req, res) => {
    try {
        const items = await PeopleAlsoBought.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
