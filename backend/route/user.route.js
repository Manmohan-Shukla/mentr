const express = require('express');
const { protect, restrictTo } = require('../middlewares');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.use(protect);                           // everything below requires login

router.get('/me/session', userController.mySessions);
router.get('/me/session/:id', userController.getMySession);
router.post('/me/session', userController.bookSession);
router.post('/me/rating', userController.createRating);
router.get('/me/rating', userController.getMyRatings);

module.exports = router;