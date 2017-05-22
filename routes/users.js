
var express = require('express');
var router = express.Router();
var models = require('../models');
var controller = require('../controllers/student_control')
var midleware = require('../helper/token')

/* GET users listing. */
router.get('/users', midleware.adminOnly, controller.getAll);

router.get('/users/:id', midleware.adminAndUser, controller.getOne)

router.post('/users', midleware.adminOnly, controller.toCreate)

router.delete('/users/:id', midleware.adminOnly, controller.deleteOne)

router.put('/users/:id', midleware.adminAndUser, controller.updateOne)

router.post('/signup', controller.toSignUp)

router.post('/signin', controller.toSignIn)

module.exports = router;
