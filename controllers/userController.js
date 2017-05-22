var db = require('../models')
var bcrypt = require('bcrypt');
const saltRounds = 10;
let sec = 'ab1702ndnjs721bAVNJsndsa9ahS';
var jwt = require('jsonwebtoken');

var getAll = function(req, res, next) {
  let token = req.headers.token

  if(token) {
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded.role == 'admin') {
        db.User.findAll()
        .then(users => {
          res.send(users)
        })
        .catch(err => {
          res.send(err)
        })
      } else {
        res.send('Route only for admin')
      }
    })

  } else {
    res.send('Not logged in')
  }
}

var getOne = function(req, res, next) {
  let token = req.headers.token

  if(token) {
    let id = req.params.id
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded.id == id || decoded.role == 'admin') {
        db.User.findById(id)
        .then(user => {
          res.send(user)
        })
        .catch(err => {
          res.send(err)
        })
      } else {
        res.send(`Route only for admin and user with ID no ${id}`)
      }
    })
  } else {
    res.send('Not logged in')
  }
}

var createUser = function(req, res, next) {
  let token = req.headers.token

  if(token) {
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded.role == 'admin') {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
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
            });
        });
      } else {
        res.send('Route only for admin')
      }
    })
  } else {
    res.send('Not logged in')
  }
}

var editUser = function(req, res, next) {
  let token = req.headers.token

  if(token) {
    let id = req.params.id
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded.id == id || decoded.role == 'admin') {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                db.User.findById(req.params.id)
                .then(user => {
                  if(decoded.role == "admin") {
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
      } else {
        res.send(`Route only for admin and user with ID no ${id}`)
      }
    });
  } else {
    res.send('Not logged in')
  }
}

var deleteUser = function(req, res, next) {
  let token = req.headers.token

  if(token) {
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
  } else {
    res.send('Not logged in')
  }
}

module.exports = {
  getAll, getOne, createUser, editUser, deleteUser
};