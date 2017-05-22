const db = require('../models')
const passwordHash = require('password-hash')
const jwt = require('jsonwebtoken')

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
    let pass = passwordHash.generate(req.body.password)
    db.User.create( {name: req.body.name, phone: req.body.phone, username: req.body.username, password: pass, role: req.body.role} )
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
  login:function(req, res, next) {
    db.User.findOne({where: { username:req.body.username }})
    .then( user => {
      if(passwordHash.verify(req.body.password, user.password)){
        let token = jwt.sign({username: user.username,role: user.role,id: user.id},"rahasia", {expiresIn:'1h'})
        res.send(token)
      } else {
        res.send('password salah')
      }
    })
    .catch( error => {
      res.json({ error })
    })
  },
  update:function(req, res, next) {
    let pass = passwordHash.generate(req.body.password)
    db.User.update({name: req.body.name, phone: req.body.phone, username: req.body.username, password: pass, role: req.body.role},{where: { id:req.params.id }})
    .then( data => {
      res.send("terupdate")
    })
    .catch( error => {
      res.json({ error })
    })
  }
}


module.exports = methods
