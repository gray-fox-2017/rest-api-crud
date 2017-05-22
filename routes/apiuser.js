var express = require('express');
var router = express.Router();
var models = require('../models');
var getData = require('../controller/user_controller');



//sign_up
// router.post('/signin', getData.signin);
//getAllUsers
router.get('/users', getData.getAllUsers );

//finduser
router.get('/users/:id', getData.findUser);

//createUser()
router.post('/users', getData.createUser );

//deleteUser())
router.delete('/users/:id', getData.deleteUser);

//update
router.put('/users/:id', getData.updateUser)




module.exports = router
