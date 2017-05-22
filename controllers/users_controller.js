// var obj = {}
var db = require('../models')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const saltRounds = 10;


var addUser = function(req, res) {
  let name      = req.body.name
  let username  = req.body.username
  let password  = req.body.password
  let role      = req.body.role
  db.User.create(req.body)
  .then((users) => {
    res.send('success adding data')
  })
  .catch((err) => {
    res.send(err.errors.message)
  })
}

var getUser = function(req, res) {
  let decode = jwt.verify(req.headers.token, 'SECRET_KEY!');
  if(decode.role == "admin") {
    db.User.findAll()
    .then((users) => {
      res.send({user : users})
    })
    .catch((err) => {
      res.send(err)
    })
  } else {
    res.send('tidak berhak!')
  }

}

var getOneUser = function(req, res) {
  let decode = jwt.verify(req.headers.token, 'SECRET_KEY!');
  if (decode.role == "admin" || decode.role =="user") {
    let id = req.params.id
    db.User.findById(id)
    .then((users) => {
      res.send({user : users})
    })
    .catch((err) => {
      res.send(err)
    })
  } else {
    res.send('haduh gabisa bro!')
  }

}

var editUser = function(req, res) {
  let decode = jwt.verify(req.headers.token, 'SECRET_KEY!');
  if (decode.role == "admin" || decode.role == "admin") {
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
  } else {
    res.send('sorry tidak boleh')
  }

}

var deleteUser = function(req, res) {
  let decode = jwt.verify(req.headers.token, 'SECRET_KEY!');
  if (decode.role == "admin") {
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
  } else {
    res.send('maaf pintu anda bbukan yang ini')
  }


}

var signUp = function (req, res) {
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(req.body.password, salt);
  db.User.create({
    name : req.body.name,
    username : req.body.username,
    password : hash,
    role : req.body.role
  })
  .then((users) => {
    res.send(`Success adding ${users.name} `)
  })
  .catch((err) => {
    res.send(err.message)
  })
}

var signIn = function (req, res) {
  let username = req.body.username
  let password = req.body.password
  db.User.findOne({
    where : {
      username : req.body.username
    }
  })
  .then((users) => {
    console.log("================================"+users);
    if (bcrypt.compare(req.body.password, users.password)) {
      var token = jwt.sign({username : users.username, role : users.role}, 'SECRET_KEY!')
      res.send(token)
    } else {
      res.send('salah dodol')
    }
  })
}

module.exports = {
  addUser,
  getUser,
  getOneUser,
  editUser,
  deleteUser,
  signUp,
  signIn
}