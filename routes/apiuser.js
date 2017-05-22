var express = require('express');
var router = express.Router();

router.get('/users', getAllUsers());
router.get('/users/:id', getUserbyID());
router.post('users', createUser());
router.delete('/users/:id', deleteUser());
router.put('/users/:id', updateUser());



module.exports = router
