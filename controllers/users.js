'use strict'
var models = require('../models')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

module.exports = {
  signin : (req, res)=>{
    models.User.findOne({
      where : {
        username : req.body.username
      }
    })
    .then((query)=>{
      if(bcrypt.compareSync(req.body.password, query.dataValues.password)){
          var token = jwt.sign({
            first_name : query.dataValues.first_name,
            last_name : query.dataValues.last_name,
            username : query.dataValues.username,
            role : query.dataValues.role
          }, 'secret', {expiresIn : '1h'})
          res.send(token)
      }
    })
  },
  signup : (req, res)=>{
    models.User.create({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      username : req.body.username,
      password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      role : req.body.role
    })
    .then((query)=>{
      res.send(query)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  getAll : (req, res)=>{
    models.User.findAll()
    .then((query)=>{
      res.send(query)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  getDetail : (req, res)=>{
    models.User.findOne({
      where : {
        id : req.params.id
      }
    })
    .then((query)=>{
      res.send(query)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  insert : (req, res)=>{
    models.User.create({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      username : req.body.username,
      password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      role : req.body.role
    })
    .then((query)=>{
      res.send(query)
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  deleteOne : (req, res)=>{
    models.User.destroy({
      where : {
        id : req.params.id
      }
    })
    .then(()=>{
      res.send("Deleted")
    })
    .catch((err)=>{
      res.send(err)
    })
  },
  updateOne : (req, res)=>{
    models.User.findOne({
      where : {
        id : req.params.id
      }
    })
    .then((query)=>{
      query.updateAttributes({
        first_name : req.body.first_name || query.dataValues.first_name,
        last_name : req.body.last_name || query.dataValues.last_name,
        createdAt : query.dataValues.createdAt,
        updatedAt : new Date()
      })
      .then((result)=>{
        res.send(result)
      })
      .catch((err)=>{
        res.send(err)
      })
    })
  }
}
