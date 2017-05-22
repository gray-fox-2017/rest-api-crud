var models = require('../models')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')

//
var signin = (req,res) =>{
  models.Users.findOne({
    where : {
      username : req.body.username
    }
  })
  .then ( function(datauser){
    console.log('setelah then');
    console.log(datauser);
    if (bcrypt.compareSync(req.body.password, datauser.password)) {
      console.log('Masuk if');
      var token = jwt.sign({
        username : datauser.username,
        role : datauser.role,
        email : datauser.email
      }, 'secretuser')
      res.send(token)
      }

  })
  .catch((err) => {
    res.send(err)
  })
}


var SignUp = (req,res) =>{
  models.Users.findOne({
    where : {
      username : req.body.username
    }
  })
  .then( data => {
    if (data) {
      res.send("Username sudah ada")
    } else {
       models.Users.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        email: req.body.email,
        role: req.body.role ,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then((data)=>{
        console.log('ini data ', data);
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
    }
  })
  .catch((err) => {
    console.log(err.message);
  })
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
    password : req.body.bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
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
 signin,
 SignUp
}
