var models = require('../models')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

var methods = {}

methods.signup = (req, res) => {
  var saltRounds = 10
  var hash = bcrypt.hashSync(req.body.password, saltRounds)
  req.body.password = hash
  models.User.create({
    username: req.body.username,
    password: req.body.password,
    role: 'user'
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

methods.signin = (req, res) => {
  models.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    bcrypt.compare(req.body.password, user.password)
    .then(decoded => {
      var token = jwt.sign({
        username: user.username,
        role: user.role,
        id: user.id
      }, 'rahasia', { expiresIn: '3h' });
      if (token) {
        res.send({token})
      }
    })
  })
}

methods.create = (req, res) => {
  if (req.user.role == 'admin') {
    var saltRounds = 10
    bcrypt.hash(req.body.password, saltRounds)
    .then(hash => {
      models.User.create({
        username: req.body.username,
        password: hash,
        role: req.body.role
      })
      .then(user => {
        res.send(user)
      })
    })
  } else {
    res.send({msg: 'User not authorized'})
  }
}

methods.readAll = (req, res) => {
  if (req.user.role == 'admin') {
    models.User.findAll({
      order: [
        ['id', 'ASC']
      ]
    })
    .then(users => {
      res.send(users)
    })
  } else {
    res.send({msg: 'User not authorized'})
  }
}

methods.read = (req, res) => {
  if (req.user.id == req.params.id || req.user.role == 'admin') {
    models.User.findById(req.params.id)
    .then(user => {
      res.send(user)
    })
  } else {
    res.send({msg: 'User not authorized'})
  }

}

methods.update = (req, res) => {
  if (req.user.role == 'admin') {
    models.User.findById(req.params.id)
    .then(user => {
      if(req.body.password) {
        var saltRounds = 10
        var hash = bcrypt.hashSync(req.body.password, saltRounds)
        req.body.password = hash
      }
      user.update({
        username: req.body.username || user.username,
        password: req.body.password || user.password,
        role: req.body.role || user.role
      })
      .then(updated => {
        res.send(updated)
      })
    })
  } else {
    res.send({msg: 'User not authorized'})
  }
}

methods.delete = (req, res) => {
  if (req.user.role == 'admin') {
    models.User.findById(req.params.id)
    .then(user => {
      user.destroy()
      .then((yes) => {
        res.send({msg: `User ${user.username} has been deleted`})
      })
    })
  } else {
    res.send({msg: 'User not authorized'})
  }
}

module.exports = methods
