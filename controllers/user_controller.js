const db = require('../models')
let methods = {
  getAll:function(req, res, next) {
    db.User.findAll()
      .then( user => {
        res.json(user)
      })
      .catch( error => {
        res.json({error})
      })
  },
  getById:function(req, res, next) {
    db.User.findById(req.params.id)
      .then( user => {
        res.json(user)
      })
      .catch( error => {
        res.json({error})
      })
  },
  create:function(req, res, next) {
    db.User.create({ name: req.body.name, phone: req.body.phone })
      .then(data => {
        res.send("data berhasil ditambahkan !")
      })
      .catch(err => {
        res.json({ error })
      })
  },
  delete:function(req, res, next) {
    db.User.destroy({where: { id:req.params.id }})
    .then( () => {
      res.send("terhapus")
    })
    .catch( error => {
      res.json({ error })
    })
  },
  update:function(req, res, next) {
    db.User.update({name: req.body.name, phone: req.body.phone},{where: { id:req.params.id }})
    .then( data => {
      res.send("terupdate")
    })
    .catch( error => {
      res.json({ error })
    })
  }
}


module.exports = methods
