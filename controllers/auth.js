'use strict'
var db = require('../models')
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'Password';
var jwt = require('jsonwebtoken')
require('dotenv').config()

var signIn = function(req, res){
  let password = req.body.password
  let username = req.body.username

  db.User.find({where: {"username": username}})
  .then((user) =>{
    if(user!==null){
      let passwordFlag = bcrypt.compareSync(password, user.password)
      if(username == user.username && passwordFlag == true){
        let token = jwt.sign({id: user.id, username: user.username, role:user.role, email:user.email}, process.env.SECRET_KEY);
        res.send(token)
      } else {res.send('You are, not authorized. This is only for ' + user.username )}
    } else {res.send('username not registered')}
  })
  .catch((err) => res.send(err.message))
}

var newUser = function(req, res){
  let password = req.body.password
  var salt = bcrypt.genSaltSync(saltRounds)
  let encryptedPassword = bcrypt.hashSync(password, salt)
  db.User.create({
    username: req.body.username,
    password: encryptedPassword,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role: req.body.role || 'customer'
  })
  .then(() => {
    res.send('user added')
  })
  .catch((err) => res.send(err.message))
}

module.exports = {
  newUser,
  signIn
}
