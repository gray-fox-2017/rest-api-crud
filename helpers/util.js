require('dotenv').config();
let sec = process.env.SECRET_KEY;

var db = require('../models')

var bcrypt = require('bcrypt');
const saltRounds = 10;

var jwt = require('jsonwebtoken');

var adminOnly = function(req, res, next) {
  let token = req.headers.token

  if(token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if(decoded.role == 'admin') {
        next()
      } else {
        res.send('Route only for admin')
      }
    })
  } else {
    res.send('Not logged in')
  }
}

var authUserAndAdmin = function(req, res, next) {
  let token = req.headers.token

  if(token) {
    jwt.verify(token, sec, (err, decoded) => {
      if(decoded.role == 'admin' || decoded.id == req.params.id) {
        next()
      } else {
        res.send('Route only for admin and authenticated user only')
      }
    })
  } else {
    res.send('Not logged in')
  }
}

module.exports = {
  adminOnly, authUserAndAdmin
};