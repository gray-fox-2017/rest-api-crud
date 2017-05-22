var jwt = require('jsonwebtoken')

const adminValidator = function(req,res,next) {
  jwt.verify(req.headers.token, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',function(err,decoded) {
    if (decoded) {
      if (decoded.role == "admin") {
        next()
      } else {
        res.send({msg: `rolenya bukan admin mas, sepurane`})
      }
    } else if (err) {
      res.send({msg: `Tokennya error mas`})
    }
  })
}

const userValidator = function(req,res,next) {
  jwt.verify(req.headers.token, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',function(err,decoded) {
    if (decoded) {
      if (decoded.role == "admin" || decoded.role == "user") {
        next()
      } else {
        res.send({msg: `rolenya bukan admin atau user mas, sepurane`})
      }
    } else if (err) {
      res.send({msg: `Tokennya error mas`})
    }
  })
}

module.exports = {
  adminValidator,
  userValidator
};
