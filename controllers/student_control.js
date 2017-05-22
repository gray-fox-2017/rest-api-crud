'use strict'

var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const saltRounds = 10;


const models = require('../models')
  module.exports = {
    getAll: function(req, res, next){
    models.Student.findAll()
    .then((data)=>{

      res.send(data);
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  getOne: function(req, res, next){
    models.Student.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((data)=>{
      res.send(data)
    })
    .then((err)=>{
      res.send(err)
    })
  },
  toCreate: function(req, res, next){
    let body = req.body
    models.Student.create({
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      updateAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      username: body.username,
      password: body.password,
      role: body.role
    })
    .then((data)=>{
      res.send(data)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  updateOne: function(req, res, next){
    models.Student.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((data)=>{
      console.log(data)
      let body = req.body
      let value = data.dataValues
      data.updateAttributes({
        firstname: body.firstname || value.firstname,
        lastname: body.lastname || value.lastname,
        email: body.email || value.email,
        createdAt: new Date().toISOString(),
        updateAt: new Date().toISOString(),
        username: body.username || value.username,
        password: bcrypt.hashSync(body.password, bcrypt.genSaltSync(saltRounds)) || value.password,
        role: body.role || value.role
      })
      .then((query)=>{
        res.send(query)
      })
      .catch((err)=>{
        res.send(err)
      })
    })
  },
  deleteOne: function(req, res, next){
    models.Student.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(()=>{
      models.Student.findAll()
      .then((data)=>{
        res.send(data)
      })
      .catch((err)=>{
        res.send(err)
      })
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  toSignUp: function(req, res, next){
    let body = req.body
    models.Student.create({
      firstname: body.firstname,
      lastname: body.lastname,
      email: body.email,
      updateAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      username: body.username,
      password: bcrypt.hashSync(body.password, bcrypt.genSaltSync(saltRounds)),
      role: 'user'
    })
    .then((data)=>{
      res.send(data)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  toSignIn: function(req, res, next){
    models.Student.findOne({
      where: {
        username: req.body.username
      }
    })
    .then((data)=>{
      if(bcrypt.compareSync(req.body.password, data.dataValues.password)){
        let token = jwt.sign({
          firstname: data.dataValues.firstname,
          lastname: data.dataValues.lastname,
          email: data.dataValues.email,
          username: data.dataValues.username,
          role: data.dataValues.role
        }, 'secret_user');
        res.send('log in berhasil : '+token);
      }else{
        res.send('login gagal')
      }
    })
    .catch((err)=>{
      res.send(err)
    })
  }

}
