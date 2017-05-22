const User = require('../models/').User;

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
  let userData = {
    username : req.body.username,
    password : req.body.password,
    role: req.body.role,
    email:req.body.email
  }
  User.create(userData)
  .then(()=>{res.send('INSERTED')})
  .catch(err=>{res.send(err)});
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
    // console.log(user);
    // res.send(user);
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
  editUser
}