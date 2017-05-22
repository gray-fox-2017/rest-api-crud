var express = require('express');
var router = express.Router();
var users_controller = require('../../controllers/users_controller.js')


router.get('/', users_controller.getUser);
router.get('/:id', users_controller.getOneUser );
router.post('/', users_controller.addUser );
router.delete('/:id', users_controller.deleteUser );
router.put('/:id', users_controller.editUser );
router.patch('/:id', users_controller.editUser );



module.exports = router;
