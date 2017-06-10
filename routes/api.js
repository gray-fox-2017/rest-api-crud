var express = require('express');
var router = express.Router();
var db = require('../models/');
var fung = require('../controller/userControl');

/* GET home page. */
router.get('/users', fung.cekUser, fung.showAll);

router.post('/users', fung.cekAdmin, fung.create)

router.get('/users/:id', fung.cekUser, fung.find)

router.delete('/users/:id', fung.cekAdmin, fung.hapus)

router.put('/users/:id', fung.cekUser, fung.apdet)

router.post('/signup', fung.signUp)

router.post('/signin', fung.signIn)



module.exports = router;
