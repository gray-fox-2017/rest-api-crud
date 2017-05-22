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

module.exports = {
  getAllUser,
  getOneUser
}
