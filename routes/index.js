var express = require('express');
var router = express.Router();
var users_controller = require('../controllers/users_controller.js')

/* GET home page. */
router.get('/', function(req, res) {
  res.send('https://github.com/erwinwahyura/rest-api-crud')
})

router.get('/api/users', users_controller.getUser);
router.get('/api/users/:id', users_controller.getOneUser );
router.post('/api/users', users_controller.addUser );
router.delete('/api/users/:id', users_controller.deleteUser );
router.put('/api/users/:id', users_controller.editUser );
router.patch('/api/users/:id', users_controller.editUser );
router.post('/api/signup', users_controller.signUp);
router.post('/api/signin', users_controller.signIn);

module.exports = router;
