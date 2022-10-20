const express = require('express');
const router = express.Router();

// getting home controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/upload', homeController.upload);

module.exports = router;
