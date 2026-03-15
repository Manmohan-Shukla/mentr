const express = require('express');
const { protect, restrictTo } = require('../middlewares');
const superAdminController = require('../controllers/superadmin.controller');

const router = express.Router();

router.use(protect, restrictTo('superadmin'));

router
  .route('/admins')
  .get(superAdminController.getAllAdmins)
  .post(superAdminController.createAdmin)
  .put(superAdminController.updateAdmin);   // maybe better with :id

router.route('/admins/:id').delete(superAdminController.deleteAdmin);

router.get('/users', superAdminController.getAllUsers);
router.route('/users/:id').get(superAdminController.getUser).delete(superAdminController.deleteUser);

module.exports = router;