var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller')
var authController = require('../controllers/auth')
var util = require('../helpers/util.js')

router.get('/users', util.authAdmin, userController.getAllUser)

router.get('/users/:id', util.authUser, userController.getOneUser)

router.post('/users', util.authAdmin, userController.createUser)

router.delete('/users/:id', util.authAdmin, userController.deleteUser)

router.put('/users/:id', util.authAdmin, userController.updateUser)

router.post('/signup', authController.newUser)

router.post('/signin', authController.signIn)

module.exports = router;
