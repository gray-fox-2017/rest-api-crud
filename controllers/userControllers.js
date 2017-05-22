const db = require('../models');
const Methods = {
  createUser: function(req,res) {
    db.User.create({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email,
      fullname : req.body.fullname
    })
    .then(function(user) {
      res.send(`Created user ${user.username} success`)
    })
    .catch(function(err) {
      res.send({msg: `${err.message}`})
    })
  },
  getAll: function(req,res) {
    db.User.findAll()
    .then(function(Users) {
      res.send(Users)
    })
    .catch(function (err) {
      res.send({msg : err.message})
    })
  },
  getSingle: function(req,res) {
    db.User.findOne({
      where : {
        id : req.params.id
      }
    })
    .then(function(user) {
      res.send(JSON.stringify(user))
    })
    .catch(function(err) {
      res.send({msg: err.message})
    })
  },
  deleteUser: function(req,res) {
    db.User.findOne({
      where: {
        id : req.params.id
      }
    })
    .then(function(user) {
      user.destroy()
      .then(function() {
        res.send(`Delete ${user.username} succes`)
      })
    })
  }
}

module.exports = Methods;
