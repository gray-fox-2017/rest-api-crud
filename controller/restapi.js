"use strict";
const user = require('../models/').user;

var getAll = ((req,res,next) => {
  user.findAll()
    .then (users => {
      res.send(users);
    });
});

var getOne = ((req,res,next) => {
  let id = req.params.id;
  user.findById(id)
    .then (user => {
      res.send(user);
    });
});

var createUser = ((req,res,next) => {
  let userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  user.create(userData)
    .then ((userData) => {
      res.send(userData);
    });
});

var deleteOne = ((req,res,next) => {
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

module.exports = {
  getAll,
  getOne,
  createUser,
  deleteOne,
  updateUser
};
