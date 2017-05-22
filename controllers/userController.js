var db = require('../models');
var bcrypt  = require('bcrypt')
var jwt = require('jsonwebtoken')
const saltRounds = 10;

const methods = {}

methods.signIn = function(req,res){
  db.User.findOne({where : {username:req.body.username}})
          .then((user)=>{
            console.log('====',user.password);
            bcrypt.compare(req.body.password, user.password)
              .then((value)=>{
                if(value == true){
                  console.log('masuk sini',res);
                  let token = jwt.sign({id:user.id, username: user.username, role: user.role}, process.env.SECRET)
                  console.log('tokennya = ',token);
                  res.send(token)
                }
                else{
                  res.send('password tidak cocok')
                }
              })
          })
}


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
  let user = req.user
  bcrypt.hash(req.body.password, saltRounds)
  .then((hash)=>{
    db.User.create({
      username:req.body.username,
      password:hash,
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      role:req.body.role
    })
    .then((user)=>{
      res.send(user)
    })
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