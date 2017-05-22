var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var util = require('../helpers/util')

/* GET home page. */
router.get('/', util.adminOnly, userController.getAll);

router.post('/', util.adminOnly, userController.createUser);

router.get('/:id', util.authUserAndAdmin, userController.getOne);

router.put('/:id', util.authUserAndAdmin, userController.editUser);

router.delete('/:id', util.adminOnly, userController.deleteUser);

module.exports = router;
