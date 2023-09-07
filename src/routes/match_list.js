const express = require('express');
const router = express.Router();

const matchlistController = require('../app/controllers/MatchListController');

router.get('/1_64', matchlistController.R64);
router.get('/1_32', matchlistController.R32);
router.get('/1_16', matchlistController.R16);
router.get('/1_8', matchlistController.R8);
router.get('/1_4', matchlistController.R4);
router.get('/semi', matchlistController.semi);
router.get('/3_4', matchlistController.R3_4);
router.get('/final', matchlistController.final);

module.exports = router;
