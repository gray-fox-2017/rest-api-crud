var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth')

/* GET home page. */
router.post('/signin', auth.userLogin);

router.post('/signup', auth.userRegister)

module.exports = router;
