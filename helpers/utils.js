var jwt = require('jsonwebtoken')
var methods = {}

methods.isValidUser = (req, res, next) => {
  jwt.verify(req.headers.token, 'rahasia', (err, decoded) => {
    if (err) {
      res.send({msg: 'User not authenticated'})
    } else {
      req.user = decoded
      next()
    }
  })
}

module.exports = methods
