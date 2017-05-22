const db = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
require('dotenv').config()

function read (req,res,next){
let decoded = jwt.verify(req.headers.token, process.env.SECRET)
if(decoded.role === "Admin"){  
db.User.findAll()
.then(data=>{
  res.send(data)
    })
  }
  else {
    res.send('NOT AUTHORIZED to check all users data !!')
  }
}

function signin(req,res,next){
  
  db.User.findOne({
    where:{
      username: req.body.username
    }
  })
  .then(data=>{
    if(bcrypt.compare(req.body.password, data.password)){
      var token = jwt.sign({username: data.username,role: data.role},process.env.SECRET)
      res.send(token)
    }
  else{
    res.send('Invalid username or password!')
    }
  }) 
}


function find(req,res,next){
let decoded = jwt.verify(req.headers.token, process.env.SECRET)
if(decoded.role === "Admin" || decoded){
  db.User.findOne({
    where:{
      id: req.params.id
    }
  })
  .then(data=>{
    res.send(data)
    })
  }
  else{
    res.send('Not Authorized to search!!')
  }
}



function create (req,res,next){
let decoded = jwt.verify(req.headers.token, process.env.SECRET)
  if(decoded.role === "Admin"){
    
  let salt = bcrypt.genSaltSync(saltRounds)
  let hash = bcrypt.hashSync(req.body.password, salt)
  
  db.User.create({
    username: req.body.username,
    password: hash,
    role: req.body.role
  })
  .then(data=>{
    res.send(data)
    })
  }
  else{
    res.send('NOT AUTHORIZED to create a new User!!!!')
  }
}

function signup (req,res,next){
  let salt = bcrypt.genSaltSync(saltRounds)
  let hash = bcrypt.hashSync(req.body.password, salt)
  
  db.User.create({
    username: req.body.username,
    password: hash,
    role: 'Admin'
  })
  .then(data=>{
    res.send(data)
    })
}

function deleteUser (req,res,next){
  let decoded = jwt.verify(req.headers.token, process.env.SECRET)
  if(decoded.role === "Admin"){
  db.User.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.send(req.body.username)
    })
  }
  else{
    res.send('NOT AUTHORIZED to delete!!!')
  }
}

function deleteUser (req,res,next){
  let decoded = jwt.verify(req.headers.token, process.env.SECRET)
  if(decoded.role === "Admin"){
  db.User.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.send(req.body.username)
    })
  }
  else{
    res.send('NOT AUTHORIZED to delete!!!')
  }
}


function edit(req,res,next){
  let decoded = jwt.verify(req.headers.token, process.env.SECRET)
  if(decoded.role === "Admin" || decoded){
  db.User.update(req.body,{
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.send(req.body)
    })
  }
  else{
    res.send("NOT AUTHORIZED to edit!!")
  }
}

function commands(req,res,next){
    res.send('Go to https://github.com/stedyyulius/rest-api-crud')
}

module.exports = {
  read,create,deleteUser,edit,find,signin,signup,commands
}