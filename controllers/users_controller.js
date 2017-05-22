// var obj = {}
var db = require('../models')

var addUser = function(req, res) {
  let name = req.body.name
  let address = req.body.address
  let phone = req.body.phone
  let subject = req.body.subject
  db.User.create(req.body)
  .then((users) => {
    res.send('success adding data')
  })
  .catch((err) => {
    res.send(err)
  })
}

var getUser = function(req, res) {
  db.User.findAll()
  .then((users) => {
    res.send({user : users})
  })
  .catch((err) => {
    res.send(err)
  })
}

var getOneUser = function(req, res) {
  let id = req.params.id
  db.User.findById(id)
  .then((users) => {
    res.send({user : users})
  })
  .catch((err) => {
    res.send(err)
  })
}

var editUser = function(req, res) {
  let id = req.params.id
  db.User.findById(id)
  .then((users) => {
    db.User.update({
      name : req.body.name || users.name,
      address : req.body.address || users.address,
      phone : req.body.phone || users.phone,
      subject : req.body.subject || users.subject
    }, {
      where : {
        id : req.params.id
      }
    })
      res.send(`success update info with id : ${users.id}`)

  })
  .catch(err => {res.send(err)})
}

var deleteUser = function(req, res) {
  let id = req.params.id
  db.User.findById(id)
  .then((users) => {
    db.User.destroy({
    where : {
      id : users.id
    }
  })
    // .then((data) => {
      res.send("success delete user!")
    // })
    .catch((err) => {
      res.send(err)
    })
  })
  .catch((err) => {
    res.send(err)
  })

}

module.exports = {
  addUser,
  getUser,
  getOneUser,
  editUser,
  deleteUser
}