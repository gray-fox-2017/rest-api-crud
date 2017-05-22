var models = require('../models')

var methods = {}

methods.create = (req, res) => {
  models.User.create(req.body)
  .then(user => {
    res.send(user)
  })
}

methods.readAll = (req, res) => {
  models.User.findAll()
  .then(users => {
    res.send(users)
  })
}

methods.read = (req, res) => {
  models.User.findById(req.params.id)
  .then(user => {
    res.send(user)
  })
}

methods.update = (req, res) => {
  models.User.findById(req.params.id)
  .then(user => {
    user.update({
      username: req.body.username || user.username,
      password: req.body.password || user.password
    })
    .then(updated => {
      res.send(updated)
    })
  })
}

methods.delete = (req, res) => {
  models.User.findById(req.params.id)
  .then(user => {
    user.destroy()
    .then((yes) => {
      res.send({msg: `User ${user.username} has been deleted`})
    })
  })
}

module.exports = methods
