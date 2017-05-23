const db = require('../models');
var hash = require('object-hash');
var jwt = require('jsonwebtoken')

const Methods = {
  createUser: function(req, res) {
    db.User.create({
        username: req.body.username,
        password: hash(req.body.password),
        email: req.body.email,
        fullname: req.body.fullname,
        role: req.body.role
      })
      .then(function(user) {
        res.send(`Created user ${user.username} success`)
      })
      .catch(function(err) {
        res.send({
          msg: `${err.message}`
        })
      })
  },
  getAll: function(req, res) {
    db.User.findAll()
      .then(function(Users) {
        res.send(Users)
      })
      .catch(function(err) {
        res.send({
          msg: err.message
        })
      })
  },
  getSingle: function(req, res) {
    db.User.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(user) {
        res.send(JSON.stringify(user))
      })
      .catch(function(err) {
        res.send({
          msg: err.message
        })
      })
  },
  deleteUser: function(req, res) {
    db.User.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(user) {
        user.destroy()
          .then(function() {
            res.send(`Delete ${user.username} success`)
          })
      })
  },
  updateUser: function(req,res) {
    db.User.findOne({
      where: {
        id : req.params.id
      }
    })
    .then(function(user) {
      user.update({
        username : req.body.username,
        password : hash(req.body.password),
        email : req.body.email,
        fullname : req.body.fullname,
        role: req.body.role
      })
      .then(function() {
        res.send(`Update user ${user.username} success`)
      })
      .catch(function(err) {
        res.send({msg : err.message})
      })
    })
  },
  signIn: function(req,res) {
    db.User.findOne({
      where : {
        username: req.body.username
      }
    })
    .then(function(user) {
        if (user.password === hash(req.body.password)) {
          res.send(jwt.sign({username : user.username, role : user.role},'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'))
        } else {
          res.send({msg: `Password unmatch for username ${user.username}`})
        }
    })
  },
  signUp: function(req,res) {
    db.User.create({
        username: req.body.username,
        password: hash(req.body.password),
        email: req.body.email,
        fullname: req.body.fullname,
        role: "user"
      })
      .then(function(user) {
        res.send(`Created user ${user.username} success`)
      })
      .catch(function(err) {
        res.send({
          msg: `${err.message}`
        })
      })
  }
}

module.exports = Methods;
