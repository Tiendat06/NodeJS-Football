const express = require('express');
const router = express.Router();

const errorController = require('../app/controllers/ErrorController');

router.get('/500', errorController.err500);

module.exports = router;
