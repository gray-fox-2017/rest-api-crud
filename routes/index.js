var express = require('express');
var router = express.Router();
const restapi = require ('../controllers/restapi');

router.post('/signin', restapi.signinUser);

router.post('/signup', restapi.signupUser);

module.exports = router;
