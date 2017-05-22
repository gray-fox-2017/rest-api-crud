// var obj = {}
var db = require('../models')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');


var addUser = function(req, res) {
  let name      = req.body.name
  let address   = req.body.address
  let phone     = req.body.phone
  let subject   = req.body.subject
  let username  = req.body.username
  let password  = req.body.password
  let role      = req.body.role
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

var signUp = function(req, res) {
  const saltRounds = 10;
  let hash = bcrypt.hashSync(req.body.password, saltRounds)
  console.log("=======================");
  console.log("===== "+hash);
  console.log("=======================");
  db.User.create({
    name : req.body.name,
    address : req.body.address,
    phone : req.body.phone,
    subject : req.body.subject,
    username : req.body.username,
    password : hash,
    role : req.body.role
  })
  .then((users) => {
    res.send(`Success adding ${users.name} `)
  })
  .catch((err) => {
    res.send(err)
  })

  // let password = req.body.password
  // let tes = bcrypt.hashSync(password, salt)
  // res.send(tes);



}

module.exports = {
  addUser,
  getUser,
  getOneUser,
  editUser,
  deleteUser,
  signUp
}