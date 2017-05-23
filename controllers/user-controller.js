'use strict'
var db = require('../models')
var jwt = require('jsonwebtoken')
require('dotenv').config()

var getAllUser = function(req, res){
  db.User.findAll()
  .then((users)=>{
    res.send(users)
  })
}

var getOneUser = function(req, res){
  let id = req.params.id
  db.User.find({where: {'id':id}})
  .then((user)=>{
    res.send(user)
  })
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
  .catch((err) => res.send(err))
}

var updateUser = function(req, res){
  var id = req.params.id
  db.User.update(req.body,{where: {"id": id}})
  .then(() => {
    res.send('Data berhasil diupdate')
  })
}

module.exports = {
  getAllUser,
  getOneUser,
  deleteUser,
  createUser,
  updateUser
}
