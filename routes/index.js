var express = require('express');
var router = express.Router();
const restapi = require ('../controllers/restapi');

router.get('/', restapi.getAllUsers);

router.get('/:id', restapi.getUser);

router.post('/', restapi.createUser);

router.delete('/:id', restapi.deleteUser);

router.put('/:id', restapi.updateUser);

router.post('/login', restapi.loginUser);

module.exports = router;
