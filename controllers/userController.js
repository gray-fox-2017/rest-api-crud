var db = require('../models');
const methods = {}


methods.getAllUser = function(req,res){
  db.User.findAll()
  .then((users)=>{
    res.send(users)
  })
}// GET ALL USERS


methods.getSingleUser = function(req,res){
  db.User.findById(req.params.id)
  .then((user)=>{
    res.send(user)
  })
}// FIND SINGLE USER

methods.createUser = function(req,res){
  db.User.create(req.body)
  .then((user)=>{
    res.send(user)
  })
}// CREATE USER

methods.deleteUser = function(req,res){
  db.User.destroy({where : { id : req.params.id }} )
  .then((data)=>{
    res.send("sukses delete")
  })
  .catch((err)=>{
    res.send(err)
  })
}// Delete USER

methods.updateUser = function(req,res){
  db.User.update({first_name: req.body.first_name, last_name:req.body.last_name}, {where : { id : req.params.id }} )
  .then((data)=>{
    res.send(data)
  })
}// Update User

module.exports = methods