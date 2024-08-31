const express = require('express');
const router = express.Router();
const peopleAlsoBoughtController = require('../controllers/peopleAlsoBoughtController');

router.get('/', peopleAlsoBoughtController.getPeopleAlsoBought);

module.exports = router;
