var db = require('../models')
var bcrypt = require('bcrypt');
const saltRounds = 10;
let sec = 'ab1702ndnjs721bAVNJsndsa9ahS';
var jwt = require('jsonwebtoken');

var userLogin = function(req, res, next) {
  let username = req.body.username
  let password = req.body.password

  db.User.findOne({
    where: {
      username: username
    }
  })
  .then(user => {
    bcrypt.compare(password, user.password, function(err, result) {
      if(result) {
        var token = jwt.sign({ role: user.role, id: user.id }, sec);
        res.send(token);
      } else {
        res.send('Incorrect password')
      }
    })
  })
  .catch(err => {
    res.send(err)
  })
}

var userRegister = function(req, res, next) {
  bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
          db.User.create({
            username: req.body.username,
            password: hash,
            email: req.body.email,
            role: 'customer'
          })
          .then(user => {
            res.send(user)
          })
          .catch(err => {
            res.send(err)
          })
      });
  });
}

module.exports = {
  userLogin, userRegister
};