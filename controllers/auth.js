'use strict'
var db = require('../models')
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'Password';

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
}

module.exports = {
  newUser
}
