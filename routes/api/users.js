var express = require('express');
var router = express.Router()
var userControllers = require('../../controllers/userControllers');
var validator = require('../../controllers/Validator')


//Create user
router.post('/users/', validator.adminValidator ,userControllers.createUser)

//Get all the users
router.get('/users/', validator.adminValidator, userControllers.getAll)

//Get single user
router.get('/users/:id',validator.userValidator,userControllers.getSingle)

//Delete a user
router.delete('/users/:id',validator.adminValidator,userControllers.deleteUser)

//Update a user
router.put('/users/:id', validator.userValidator ,userControllers.updateUser)

//Sign in user, return token
router.post('/signin', userControllers.signIn)

//Sign up user with default role user
router.post('/signup', userControllers.signUp)
module.exports = router;
