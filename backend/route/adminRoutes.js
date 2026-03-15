const express = require('express');
const { protect, restrictTo } = require('../middlewares');
const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.use(protect, restrictTo('admin'));      // only admins

router
  .route('/session')
  .get(adminController.getAllSessions)
  .post(adminController.createSession);

router
  .route('/session/:id')
  .get(adminController.getSession)
  .put(adminController.updateSession)
  .delete(adminController.deleteSession);

router.get('/profile', adminController.getProfile);
router.get('/rating', adminController.getRatingsOverview);   // or whatever it does

module.exports = router;