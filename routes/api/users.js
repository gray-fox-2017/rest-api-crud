var express = require('express');
var router = express.Router()
var userControllers = require('../../controllers/userControllers');


//Create user
router.post('/', userControllers.createUser)

//Get all the users
router.get('/',userControllers.getAll)

//Get single user
router.get('/:id',userControllers.getSingle)

//Delete a user
router.delete('/:id',userControllers.deleteUser)

//Update a user
router.put('/:id', userControllers.updateUser)
module.exports = router;
