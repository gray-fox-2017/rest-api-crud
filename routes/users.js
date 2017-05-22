var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET home page. */
router.get('/', userController.getAll);

router.post('/', userController.createUser);

router.get('/:id', userController.getOne);

router.put('/:id', userController.editUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
