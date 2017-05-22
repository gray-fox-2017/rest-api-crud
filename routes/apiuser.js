var express = require('express');
var router = express.Router();
var models = require('../models');
var getData = require('../controller/user_controller');
var helperJwt = require('../helper/verify_data')



//sign_up
router.post('/signin', getData.signin);
//signin
router.post('/signup', getData.SignUp);
//getAllUsers
router.get('/users', helperJwt.AdminOnly, getData.getAllUsers );

//finduser
router.get('/users/:id', helperJwt.AdminUser, getData.findUser);

//createUser()
router.post('/users', helperJwt.AdminOnly, getData.createUser );

//deleteUser())
router.delete('/users/:id', helperJwt.AdminOnly, getData.deleteUser);

//update
router.put('/users/:id', helperJwt.AdminUser, getData.updateUser)




module.exports = router
