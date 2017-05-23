var express = require('express')
var router = express.Router()
var userController = require('../controllers/users')
var helperJwt = require('../helpers/jwtVerify')


router.post('/signin', userController.signin)
router.post('/signup', userController.signup)

router.get('/', helperJwt.decoded,userController.getAll)
router.get('/:id', helperJwt.decodedAdminUser, userController.getDetail)
router.post('/', helperJwt.decoded, userController.insert)
router.delete('/:id', helperJwt.decoded, userController.deleteOne)
router.patch('/:id',  helperJwt.decodedAdminUser, userController.updateOne)

module.exports = router
