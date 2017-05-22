var express = require('express');
var router = express.Router();
const restapi = require ('../controllers/restapi');

//router.use(restapi.authorization);

router.get('/', restapi.authorization, restapi.getAllUsers);
router.get('/:id', restapi.authorization, restapi.getUser);
router.post('/', restapi.authorization, restapi.createUser);
router.delete('/:id', restapi.authorization, restapi.deleteUser);
router.put('/:id', restapi.authorization, restapi.updateUser);

//router.get('/', restapi.getAllUsers);
//router.get('/:id', restapi.getUser);
//router.post('/', restapi.createUser);
//router.delete('/:id', restapi.deleteUser);
//router.put('/:id', restapi.updateUser);

module.exports = router;
