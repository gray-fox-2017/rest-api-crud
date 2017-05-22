var db = require('../models');

function getAllUsers(req, res) {
  db.Students.findAll({
    order: "id ASC"
  })
  .then(student => res.send(student))
  .catch(err => res.send(err.message));
}

function getSingleUser(req, res) {
  let id = req.params.id;
  db.Students.findById(id)
  .then(student => res.send(student))
  .catch(err => res.send(err.message));
}

function createUser(req, res) {
  db.Students.create({
    name : req.body.name,
    gender : req.body.gender,
    age : req.body.age,
    address : req.body.address,
    email : req.body.email
  })
  .then(() => res.send(`Create user success!!`))
  .catch(err => res.send(err.message));
}

function deleteUser(req, res) {
  db.Students.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(() => res.send('Delete user success!!'))
  .catch(err => res.send(err.message));
}

function updateUser(req, res) {
  db.Students.findById(req.params.id)
  .then(student => {
    db.Students.update({
      name : req.body.name || student.name,
      gender : req.body.gender || student.gender,
      age : req.body.age || student.age,
      address : req.body.address || student.address,
      email : req.body.email || student.email
    }, {
      where: {
        id: req.params.id
      }
    })
    res.send(`Update user success!!`);
  })
  .catch(err => res.send(err.message));
}

module.exports = {
  getAllUsers, getSingleUser, createUser, deleteUser, updateUser
};
