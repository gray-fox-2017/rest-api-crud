'use strict'
var db = require('../models')
var jwt = require('jsonwebtoken')

var getAllUser = function(req, res){
  let token = req.headers.token
  if (token){
    if(token.role=='admin'){
      db.User.findAll()
      .then((users)=>{
        res.send(users)
      })
    } else {
      res.send('You are not authorized!')
    }
  } else {
    res.send('please signin first')
  }
}

var getOneUser = function(req, res){
  let token = req.headers.token
  let id = req.params.id
  if(token){
    let decoded = jwt.verify(token, 'SECRET-KEY-123567')
    if(decoded.id == id){
      res.send(decoded);
    } else {
      res.send('this only for user with ID ' + id)
    }
  } else {
    res.send('please signin first')
  }
}

var deleteUser = function(req, res){
  var id = req.params.id
  db.User.destroy({where: {"id": id}})
  .then(() => {
    res.send('user deleted')
  })
}

var createUser = function(req, res){
  db.User.create(req.body)
  .then(() => {
    res.send('user added')
  })
}

var updateUser = function(req, res){
  var id = req.params.id
  db.User.update(req.body,{where: {"id": id}})
  .then((user) => {
    res.send(user)
  })
}

module.exports = {
  getAllUser,
  getOneUser,
  deleteUser,
  createUser,
  updateUser
}
