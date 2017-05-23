var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller')
var authController = require('../controllers/auth')
var util = require('../helpers/util.js')


// get all users
router.get('/users', util.authAdmin, userController.getAllUser)

// create new user
router.post('/users', util.authAdmin, userController.createUser)

// delete user
router.delete('/users/:id', util.authAdmin, userController.deleteUser)

// update user
router.put('/users/:id', util.authUser, userController.updateUser)

// get user by id
router.get('/users/:id', util.authUser, userController.getOneUser)

// sign up
router.post('/signup', authController.newUser)

// sign in
router.post('/signin', authController.signIn)

module.exports = router;
