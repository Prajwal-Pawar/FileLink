const express = require('express');
const router = express.Router();
const db = require('../configs/mongoose');
const upload = require('../configs/multer');

// getting home controller
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.post('/upload', upload.single('file'), homeController.upload);
// router.get('/file/:id', homeController.download);
// router.post('/file/:id', homeController.download);
// when single route has both get and post requests
router
  .route('/file/:id')
  .get(homeController.download)
  .post(homeController.download);

module.exports = router;
