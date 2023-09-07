const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/', siteController.home);
// router.get('/player', siteController.player);
// router.get('/login', siteController.login);
router.get('/ranks', siteController.ranks);
router.get('/create', siteController.create);
router.post('/update', siteController.update);
// router.get('/info', siteController.info);

// router.post('/add_items', siteController.add_items);

module.exports = router;
