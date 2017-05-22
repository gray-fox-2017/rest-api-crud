var express = require('express');
var router = express.Router();
var users_controller = require('../../controllers/users_controller.js')

router.post('/', users_controller.signUp);

module.exports = router;
