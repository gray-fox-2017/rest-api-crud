var router = require('express').Router()
var models = require('../models')
var userController = require('../controllers/user')
var utils = require('../helpers/utils')

router.get('/', (req, res) => {
  res.send('Alive from router')
})

router.post('/signup', userController.signup)

router.post('/signin', userController.signin)

router.get('/users', utils.isValidUser, userController.readAll)

router.get('/users/:id', utils.isValidUser, userController.read)

router.post('/users', utils.isValidUser, userController.create)

router.put('/users/:id', utils.isValidUser, userController.update)

router.delete('/users/:id', utils.isValidUser, userController.delete)

module.exports = router
