'use strict'
let jwt = require('jsonwebtoken')
require('dotenv').config()

let authAdmin = function(req, res, next){
  let token = req.headers.token
  if (token){
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    if(decoded.role=='admin'){
      next()
    } else {
      res.send('You are not authorized!')
    }
  } else {
    res.send('please signin first')
  }
}

let authUser = function(req, res, next){
  let token = req.headers.token
  let id = req.params.id
  if(token){
    let decoded = jwt.verify(token, process.env.SECRET_KEY)
    if(decoded.id == id){
      next()
    } else {
      res.send('You are not authorized! This only for user with ID ' + id)
    }
  } else {
    res.send('please signin first')
  }
}

module.exports = {
  authAdmin,
  authUser
}
