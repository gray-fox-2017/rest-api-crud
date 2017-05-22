const User = require('../models/').User;
const CryptoJS = require("crypto-js");
const SALT =  'secret key 123';
const JWTSEC = 'HOHOHO rahasia json web token';
const jwt = require("jsonwebtoken");

const needAuth = [
  {
    name:'/',
    hasParam: {
      GET : ['admin','id'],
      DELETE : ['admin'],
      PUT : ['admin','id']
    },
    noParam: {
      POST : ['admin'],
      GET : ['admin']
    }
  } //pageUser
]

const auth = (req,res,next) => {
  //token admin bisa semua
  //let token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwidXNlcmlkIjo0LCJpYXQiOjE0OTU0NTE3Mzl9.nWxSM49SMwjBkxiaXfuxiAjAaIKNMdbJk6BubZhZP7c';
  //token rakyat jelata
  // - id :  7 - pops2
  // let token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvcHMyIiwicm9sZSI6InNwdjIiLCJlbWFpbCI6InBvcHNwdjJAeWFob28uY29tIiwidXNlcmlkIjo3LCJpYXQiOjE0OTU0NTI3NTh9.kNvG6S7Nmm1tEa6iWkJlXxI1GTaPQROWI4ufEBPzP1E';
  // - id : 8 - user2
  // let token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIyIiwicm9sZSI6InVzZXIiLCJlbWFpbCI6InVzZXJAeWFob28uY29tIiwidXNlcmlkIjo4LCJpYXQiOjE0OTU0NTI4Mjd9.5XTJRTMD5Fk4tDkxGVT3B52Jr2yCimRO_5ZlzNw10iw';
  let token = req.headers.token;// || token2 ;
  let path = req.path;
  let method = req.method;
  let idx = needAuth.findIndex((x)=> x.name === path);
  let user_auth;
  let decoded = jwt.verify(token,JWTSEC);
  if (idx !== -1) {
    user_auth = (typeof req.params.id !== 'undefined'? needAuth[idx].hasParam[method] : needAuth[idx].noParam[method]);
    let is_user_auth = user_auth.findIndex((x)=>
      ((x === 'id' && decoded.userid == req.params.id ) || (decoded.role === x) )
    );
    
    if (is_user_auth === -1) res.send(`User ${decoded.userid} - role ${decoded.role} tak dapat mengakses ${path} ${method}`);
    else next();

  }
  else next();
}

const getAllData =  (req,res,next) => {
  User.findAll()
  .then((users)=>{res.send({users}); })
  .catch((err)=>{ res.send(err) })
}

const getDataByID = (req,res,next) => {
  let id = req.params.id;

  User.findById(id)
  .then(user=>{
    res.send({user});
  })
  .catch(err=>{res.send(err)});
}

const insertUser = (req,res,next) => {

  console.log(SALT);
  let password = CryptoJS.AES.encrypt(req.body.password,SALT).toString();
  console.log(password)
  let userData = {
    username : req.body.username,
    password : password,
    role: req.body.role,
    email:req.body.email
  }

  User.create(userData)
  .then(()=>{res.send('INSERTED')})
  .catch(err=>{res.send(err.message)});
}

const destroyUser = (req,res) => {
  let id = req.params.id;
  User.destroy({where:{id:id}})
  .then(()=>{ res.send(`${id} DELETED`)})
  .catch((err)=>{ res.send(err)});
}

const editUser = (req,res) => {
  let id = req.params.id;
  let newUser = {
    username : req.body.username,
    password : req.body.password,
    role: req.body.role,
    email:req.body.email
  }

  User.findById(id)
  .then( (user) => {
    user.update(newUser)
    .then( () => {res.send(`${id} UPDATED`)})
    .catch((err) => {res.send(err)} );
  })
  .catch((err) =>{res.send(err)});

}

module.exports = {
  getAllData,
  getDataByID,
  insertUser,
  destroyUser,
  editUser,
  auth
}