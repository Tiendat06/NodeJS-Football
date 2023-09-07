const express = require('express');
const router = express.Router();

const logController = require('../app/controllers/LogController');

router.get('/login', logController.login);
router.post('/confirmLogin', logController.confirmLogin);
router.get('/logout', logController.logout);

module.exports = router;
