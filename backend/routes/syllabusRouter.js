const express = require('express');
const router = express.Router();
const syllabusController = require('../controllers/syllabusController');

router.get('/', syllabusController.getSyllabus);

module.exports = router;
