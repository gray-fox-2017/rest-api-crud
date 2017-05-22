const router = require('express').Router();
const controller = require('../controller/user');

router.get('/',getAll)