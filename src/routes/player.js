const express = require('express');
const router = express.Router();

const playerController = require('../app/controllers/PlayerController');

router.get('/', playerController.player);
router.put('/add/:id', playerController.add);
router.post('/onchangePlayer', playerController.onchangePlayer);


module.exports = router;
