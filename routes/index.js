var express = require('express');
var router = express.Router();
const restapi = require ('../controllers/restapi');

router.get('/', (req,res,next) => {
  res.send('This is a REST API CRUD');
});

router.post('/signin', restapi.signinUser);

router.post('/signup', restapi.signupUser);

module.exports = router;
