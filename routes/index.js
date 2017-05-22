var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET home page. */
router.get('/api/users', userController.getAll);

router.post('/api/users', userController.createUser);

router.get('/api/users/:id', userController.getOne);

router.put('/api/users/:id', userController.editUser);

router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;
