var models = require('../models')
var jwt = require('jsonwebtoken')


var signin = (req,res) =>{
  if (req.body.username == "Ambo Dalle" && req.body.password == "123456") {
    var token = jwt.sign({ username: 'ambo', role: admin }, 'SECRET_KEY')
    res.send(token);
  }
}








var getAllUsers =  (req,res) =>{
  models.Users.findAll()
  .then((users) =>{
    res.send(users)
  })
  .catch((err) => {
    console.log(err);
  })
}

var findUser = (req,res)=>{
  models.Users.findOne({
    where : {
      id : req.params.id
    }
  })
  .then((users)=>{
    res.send(users)
  })
  .catch((err) => {
    console.log(err);
  })
}

var createUser = (req,res)=>{
  models.Users.create({
    username : req.body.username,
    password : req.body.password,
    email : req.body.email,
    role : req.body.role
  })
  .then((users)=>{
    res.send(users)
  })
  .catch((err) => {
    console.log(err);
  })
}


var deleteUser = (req,res)=> {
  models.Users.destroy({
    where : {
      id : req.params.id
    }
  })
  .then((users)=>{
    res.send('Data berhasil hapus')
  })
  .catch((err) => {
    console.log(err);
  })
}


var updateUser = (req,res)=>{
  models.Users.update({
    username : req.body.username,
    email : req.body.email,
    password : req.body.password,
    role : req.body.role
  }, {
    where : {
      id : req.params.id
    }
  })
  .then((users)=>{
    res.send(users)
  })
  .catch((err) => {
    console.log(err);
  })
}


module.exports =  {
 getAllUsers,
 findUser,
 createUser,
 deleteUser,
 updateUser,
 signin
}
