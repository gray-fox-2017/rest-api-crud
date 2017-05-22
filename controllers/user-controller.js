var db = require('../models')

var getAllUser = function(req, res){
  db.User.findAll()
  .then((users) => {
    res.send(users)
  })
}

var getOneUser = function(req, res){
  var id = req.params.id
  db.User.find({where: {"id": id}})
  .then((user) => {
    res.send(user)
  })
}

var deleteUser = function(req, res){
  var id = req.params.id
  db.User.destroy({where: {"id": id}})
  .then(() => {
    res.send('user deleted')
  })
}

var createUser = function(req, res){
  console.log('test controlers');
  db.User.create(req.body)
  .then(() => {
    res.send('user added')
  })
}

var updateUser = function(req, res){
  db.User.create(req.body)
  .then(() => {
    res.send('user updated')
  })
}

module.exports = {
  getAllUser,
  getOneUser,
  deleteUser,
  createUser,
  updateUser
}
