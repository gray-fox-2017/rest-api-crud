var express = require('express');
var api = require('../controllers/userController')
var router = express.Router();
var jwt = require('../helper/jwt_validation')

router.get('/', jwt.verifyAdmin, api.getAllUser)
router.get('/:id', jwt.verifyLogin, api.getSingleUser)
router.post('/', jwt.verifyAdmin, api.createUser)
router.delete('/:id', jwt.verifyAdmin, api.deleteUser)
router.put('/:id', jwt.verifyLogin, api.updateUser)

router.post('/signup', api.createUser)
router.post('/signin', api.signIn)


module.exports = router