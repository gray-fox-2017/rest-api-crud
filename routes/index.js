var express = require('express');
var router = express.Router();
var controller = require('../Controller/UserController.js')
/* GET home page. */
router.get('/api/users', controller.read);

router.get('/api/users/:id',controller.find)

router.post('/api/users/signup',controller.signup)

router.post('/api/users',controller.create)

router.delete('/api/users/:id',controller.deleteUser)

router.put('/api/users/:id',controller.edit)

router.post('/api/signin',controller.signin)

router.get('/',controller.commands)




module.exports = router;


