const route = require('express').Router()
const db = require('../models')
const user_controller = require('../controllers/user_controller')
const help = require('../helpers/help')

route.post('/api/users/signup', user_controller.create)
route.post('/api/users/signin', user_controller.login)

route.get('/api/users',help.isLogin,help.isAuthorized, user_controller.getAll)
route.get('/api/users/:id',help.isLogin, help.isItYours, user_controller.getById)
route.post('/api/users',help.isLogin,help.isAuthorized, user_controller.create)
route.delete('/api/users/:id',help.isLogin, help.isAuthorized, user_controller.delete)
route.put('/api/users/:id',help.isLogin, help.isItYours, user_controller.update)


module.exports=route
