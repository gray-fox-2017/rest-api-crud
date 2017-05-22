"use strict";
const user = require('../models/').user;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

var getAllUsers = ((req,res,next) => {
  user.findAll()
    .then (users => {
      res.send(users);
    });
});

var getUser = ((req,res,next) => {
  let id = req.params.id;
  user.findById(id)
    .then (user => {
      res.send(user);
    });
});

var createUser = ((req,res,next) => {
  bcrypt.hash(req.body.password, saltRounds, (err,hash) => {
    let userData = {
      username: req.body.username,
      password: hash,
      email: req.body.email,
      role: req.body.role
    };
    user.create(userData)
      .then ((userData) => {
        res.send(`New user is created: ${userData}`);
      });
  });
});

var deleteUser = ((req,res,next) => {
  let id = req.params.id;
  user.destroy({where: {id:id}})
    .then (() => {
      res.send (`User ${id} is deleted.`);
    });
});

var updateUser = ((req,res,next) => {
  let id = req.params.id;
  user.findById(id)
    .then ((user) => {
      let userData = {
        username: req.body.username || user.username,
        email: req.body.email || user.email,
        password: req.body.password || user.password,
        role: req.body.role || user.role
      };
      user.update(userData)
        .then (() => {
          res.send(`User ${id} is updated.`);
        });
    });
});

var signupUser = ((req,res,next) => {
  bcrypt.hash(req.body.password, saltRounds, (err,hash) => {
    let userData = {
      username: req.body.username,
      email: req.body.email,
      password: hash,
      role: 'customer'
    };
    user.create(userData)
      .then (userData => {
        res.send(`Signup Success: ${userData}`);
      });
  });
});

var signinUser = ((req,res,next) => {
  console.log(req.body.username);
  user.find({where:{username: req.body.username}})
    .then (user => {
      if (user.username === req.body.username) {
        console.log(`username is OK`);
        bcrypt.compare(req.body.password, user.password)
          .then ((result) => {
            if (result) {
              var token = jwt.sign({username: user.username, role: user.role}, 'THIS-IS-A-FREAKING-SECRET-DONT-TELL-ANYONE');
              res.send(token);
            }
            else {
              res.send ('Username/password is wrong');
            }
          });
      }
      else {
        res.send ('Username/password is wrong');
      }
    });
});

var authorization = ((req,res,next) => {
  let token = req.headers.token;
  jwt.verify(token, 'THIS-IS-A-FREAKING-SECRET-DONT-TELL-ANYONE', function(err, decoded) {
    if (decoded) {
      if (decoded.role === "admin") next();
      else res.send('You are not authorized. Poor you.');
    }
    if (err) {
      res.send('You are not authorized. Poor you.');
    }
  });
});

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  signupUser,
  signinUser,
  authorization
};
