'use strict'

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

module.exports = {
  adminOnly: function(req, res, next){
    let token = req.headers.token
    if(token){
      let decode = jwt.verify(token, 'secret_user');
      if(decode.role === 'admin'){
        next();
      }else{
        res.send('You are not Admin')
      }
    }
  },
  adminAndUser: function(req, res, next){
    let token = req.headers.token
    if(token){
      let decode = jwt.verify(token, 'secret_user')
      if(decode.role === 'admin' && decode.role === 'user'){
        next()
      } else {
        res.send('You are not Autorized!!')
      }
    }
  }
}
