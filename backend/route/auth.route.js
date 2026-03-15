const express = require('express');
const { protect } = require('../middleware/auth.middleware');
const authController = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);     // ← fixed typo
router.post('/logout', protect, authController.logout);
router.get('/me', protect, authController.getMe);

router
  .route('/profile')
  .get(authController.getMyProfile)     // same as /me or slightly different projection
  .patch(authController.updateMyProfile)
  .delete(authController.deleteMyProfile);

module.exports = router;