const db = require('../models/');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var authGeneral = (req,res,next)=>{
  if(req.headers.token){
    let decoded = jwt.verify(req.headers.token,'adksecretkey')
    if(decoded.role=='admin'){
      next()
    } else {
      db.user.findOne({where:{username:decoded.username}})
      .then(()=>{
        next()
      })
      .catch(()=>{
        res.send('You are not authorized')
      })
    }
  } else {
    res.send('no token found')
  }
}

var authAdmin = (req,res,next)=>{
  if(req.headers.token){
    let decoded = jwt.verify(req.headers.token,'adksecretkey')
    if(decoded.role=='admin'){
      next()
    } else {
      res.send('You are not authorized')
    }
  } else {
    res.send('no token found')
  }
}

var signup = (req,res)=>{
  db.user.create({
    username:req.body.username,
    email:req.body.email,
    password: bcrypt.hashSync(req.body.password,10),
    role:req.body.role
  })
  .then(user=>{
    res.send(`User created!\n${JSON.stringify(user)}`)
  })
  .catch(err=>{
    res.send(err.message)
  })
}

var signin = (req,res)=>{
  db.user.findOne({where:{username:req.body.username}})
  .then(user=>{
    if(user){
      if(bcrypt.compareSync(req.body.password,user.password)){
        let token = jwt.sign({username:user.username,role:user.role},'adksecretkey')
        res.send(token)
      } else {
        res.send('password is wrong');
      }
    } else {
      res.send('user not found')
    }
  })
}

var getAll = (req,res)=>{
  db.user.findAll()
  .then(users=>{
    if(users.length>0){
      res.send(users)
    } else {
      res.send(`there's currently no data in the database`)
    }
  })
}

var getById = (req,res)=>{
  db.user.findById(req.params.id)
  .then(user=>{
    if(user){
      res.send(user)
    } else {
      res.send(`no data with id ${req.params.id}`)
    }
  })
}
var create = (req,res)=>{
  db.user.create({
    username:req.body.username,
    email:req.body.email,
    password: bcrypt.hashSync(req.body.password,10),
    role:req.body.role
  })
  .then(user=>{
    res.send(`User created!\n${JSON.stringify(user)}`)
  })
}
var deleteById = (req,res)=>{
  db.user.findById(req.params.id)
  .then(user=>{
    if(user){
      user.destroy()
      .then(()=>{
        res.send(`User deleted!\n${JSON.stringify(user)}`)
      })
    } else {
      res.send(`no data with id ${req.params.id}`)
    }
  })
}
var updateById = (req,res)=>{
  db.user.findById(req.params.id)
  .then(user=>{
    user.update({
      username: req.body.username || user.username,
      email: req.body.email || user.email,
      password: req.body.password || user.password,
      role: req.body.role || user.role,
    })
    .then(updateduser=>{
      res.send(`User updated!\n${JSON.stringify(updateduser)}`)
    })
  })
}


module.exports = {
  authAdmin,
  authGeneral,
  signup,
  signin,
  getAll,
  getById,
  create,
  deleteById,
  updateById
};