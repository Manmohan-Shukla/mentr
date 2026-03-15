const express = require('express');
const { protect } = require('../middleware/auth.middleware');
const authController = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);     // ← fixed typo
router.post('/logout', protect, authController.logout);
router.get('/me', protect, authController.getMe);

module.exports = router;