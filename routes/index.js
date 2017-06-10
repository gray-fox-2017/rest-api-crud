var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.User.findAll().then( data => {
    // res.send({ title: 'Express' });
    res.redirect('/api/signup')
  })

});

module.exports = router;
