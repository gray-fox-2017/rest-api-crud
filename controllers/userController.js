var db = require('../models')
var bcrypt = require('bcrypt');
const saltRounds = 10;

var getAll = function(req, res, next) {
  db.User.findAll()
  .then(users => {
    res.send(users)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOne = function(req, res, next) {
  db.User.findById(req.params.id)
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var createUser = function(req, res, next) {
  let salt = bcrypt.genSaltSync(saltRounds);
  let hash = bcrypt.hashSync(req.body.password, salt)
  db.User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email,
    role: req.body.role
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var editUser = function(req, res, next) {
  bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
          db.User.findById(req.params.id)
          .then(user => {
            if(user.role == "admin") {
              role = req.body.role
            } else {
              role = user.role
            }
            user.update({
              username: req.body.username,
              password: hash,
              email: req.body.email,
              role: role
            })
            .then(user => {
              res.send(user)
            })
            .catch(err => {
              res.send(err)
            })
          })
          .catch(err => {
            res.send(err)
          })
      });
  });
}

var deleteUser = function(req, res, next) {
  db.User.findById(req.params.id)
  .then(user => {
    user.destroy()
    .then(() => {
      res.send('Deleted')
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAll, getOne, createUser, editUser, deleteUser
};