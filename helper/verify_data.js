var jwt = require ('jsonwebtoken');

var AdminOnly = (req,res,next) =>{
  var token = req.headers.token;
  var decode = jwt.verify(token, 'secretuser');
  console.log(decode.role);
  if(decode.role == 'admin') {
    next();
  } else {
    res.send('YOU ARE NOT Admin')
  }
}

var AdminUser = (req,res,next)=> {
  var token = req.headers.token
  var decode = jwt.verify(token, 'secretuser')
  if (decoded.role == 'admin' || decoded.role == 'user') {
    next();
  } else {
    res.send('YOU ARE NOT AUTHORIZE')
  }
}


module.exports = {
  AdminOnly,
  AdminUser
}
