var jwt = require('jsonwebtoken')
require('dotenv').config({path: '../'})

module.exports = {
  decoded : (req, res, next)=>{
    var token = req.headers.token
    var decoded = jwt.verify(token, 'secret')
    if(decoded.role == 'admin'){
      next()
    }else{
      res.send("You Can't access this routes")
    }
  },
  decodedAdminUser : (req, res, next)=>{
    var token = req.headers.token
    var decoded = jwt.verify(token, 'secret')
    if(decoded.role == 'admin' || decoded.role == 'user'){
      next()
    }else{
      res.send("You Can't access this routes")
    }
  }
}
