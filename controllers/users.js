'use strict'
var models = require('../models')
var bcrypt = require('bcrypt')

module.exports = {

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
    models.User.create(req.body)
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
        console.log(result)
        res.send(result)
      })
      .catch((err)=>{
        res.send(err)
      })
    })
  }
}
