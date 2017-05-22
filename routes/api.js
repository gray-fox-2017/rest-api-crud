var express = require('express');
var router = express.Router();
var db = require('../models/');
var fung = require('../controller/userControl');

/* GET home page. */
router.get('/users', fung.showAll);

router.post('/users', fung.create)

router.get('/users/:id', fung.find)

router.delete('/users/:id', fung.hapus)

router.put('/users/:id', fung.apdet)

router.post('/signup', fung.signUp)

router.post('/signin', fung.signIn)



module.exports = router;
