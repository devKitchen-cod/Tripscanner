const express = require('express');
const router = express.Router();

const authController = require('../controller/authController')

router.post('/auth-user-create', authController.createUser)
router.post('/auth-user-update', authController.updateUser)
router.post('/auth-user-login', authController.loginUser)
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
