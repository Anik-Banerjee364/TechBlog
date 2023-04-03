const express = require('express');
const router = express.Router();
const techController = require('../controllers/techController');

/**
 * App Routes
 */

router.get('/',techController.homepage);
router.get('/categories',techController.exploreCategories);

module.exports = router;
