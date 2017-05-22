var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller')

router.get('/users', userController.getAllUser)

router.get('/users/:id', userController.getOneUser)

// router.post('/users', userController.createUser)
//
// router.post('/users/:id', userController.deleteUser)
//
// router.put('/users/:id', userController.updateUser)

module.exports = router;
