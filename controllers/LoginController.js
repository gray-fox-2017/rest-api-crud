const User = require('../models/').User;
const CryptoJS = require("crypto-js");
const SALT = 'secret key 123';
const JWTSEC = 'HOHOHO rahasia json web token';
const jwt = require("jsonwebtoken");

//new user
const signup = (req,res,next) => {
  console.log('SIGN UP')
  let password = CryptoJS.AES.encrypt(req.body.password,SALT).toString();
  let userData = {
    username : req.body.username,
    password : password,
    role: 'user',
    email:req.body.email
  }
  User.create(userData)
  .then(()=>{res.send('INSERTED')})
  .catch(err=>{res.send(err.message)});
}
const signin = (req,res,next) => {
  let password = req.body.password;
  let username = req.body.username
  User.findOne({where:
    {
      username: username
    }
  })
  .then((user)=>{
    var plainpass = CryptoJS.AES.decrypt(user.password.toString(), SALT).toString(CryptoJS.enc.Utf8);

    // var plainpass = CryptoJS.AES.decrypt('U2FsdGVkX1+WtktyUUoz2koJH3HZ/T4CqFjp+ZUEOXY=', SALT).toString(CryptoJS.enc.Utf8);
    // console.log(plainpass)
    if (password == plainpass ) {
      let userDt = {
        username : user.username,
        role : user.role,
        email: user.email,
        userid : user.id
      }
      let token = jwt.sign(userDt,JWTSEC);
      res.send(token);
    } else {
      res.send('Invalid Password');
    }

  })
  .catch((err)=>{
    res.send('Invalid Username');
  })
}

module.exports = {
  signin,
  signup
}

