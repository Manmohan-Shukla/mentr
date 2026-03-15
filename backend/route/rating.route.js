// src/routes/rating.routes.js
const express = require('express');
const ratingController = require('../controllers/rating.controller');
const { protect, restrictTo } = require('../middlewares');

const router = express.Router();

router.get('/ratings/session/:sessionId', ratingController.getRatingsBySession);

router.post('/ratings', protect, ratingController.createRating);

router.get(
  '/ratings/admin/overview',
  protect,
  restrictTo('admin'),
  ratingController.getAdminRatingsOverview    
);


module.exports = router;