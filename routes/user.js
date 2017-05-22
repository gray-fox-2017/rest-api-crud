const route = require('express').Router()
const db = require('../models')
const user_controller = require('../controllers/user_controller')

route.get('/api/users', user_controller.getAll)

route.get('/api/users/:id', user_controller.getById)

route.post('/api/users', user_controller.create)

route.delete('/api/users/:id', user_controller.delete)

route.put('/api/users/:id', user_controller.update)

module.exports=route
