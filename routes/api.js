var router = require('express').Router()
var models = require('../models')
var userController = require('../controllers/user')

router.get('/', (req, res) => {
  res.send('Alive from router')
})

router.get('/users', userController.readAll)

router.get('/users/:id', userController.read)

router.post('/users', userController.create)

router.put('/users/:id', userController.update)

router.delete('/users/:id', userController.delete)

module.exports = router
