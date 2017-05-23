var express = require('express');
var router = express.Router();
const login_controller = require('../controllers/LoginController.js');
/* GET home page. */


router.post('/signup',login_controller.signup);
router.post('/signin',login_controller.signin);

module.exports = router;
