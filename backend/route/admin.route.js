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
  .get(adminController.getSession_by_id)
  .put(adminController.updateSession)
  .delete(adminController.deleteSession);
 

module.exports = router;