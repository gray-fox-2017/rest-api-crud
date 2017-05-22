var express = require('express');
var router = express.Router();
const restapi = require ('../controllers/restapi');

router.get('/', restapi.authorization, restapi.getAllUsers);

router.get('/:id', restapi.authorization, restapi.getUser);

router.post('/', restapi.authorization, restapi.createUser);

router.delete('/:id', restapi.authorization, restapi.deleteUser);

router.put('/:id', restapi.authorization, restapi.updateUser);

module.exports = router;
