var express = require('express');
var router = express.Router();
const restapi = require ('../controller/restapi');

router.get('/', restapi.getAll);

router.get('/:id', restapi.getOne);

router.post('/', restapi.createUser);

router.delete('/:id', restapi.deleteOne);

router.put('/:id', restapi.updateUser);

module.exports = router;
