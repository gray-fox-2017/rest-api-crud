var db = require('../models')

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
  db.User.create(req.body)
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var editUser = function(req, res, next) {
  db.User.findById(req.params.id)
  .then(user => {
    user.update(req.body)
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