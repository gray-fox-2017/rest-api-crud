var express = require('express');
var router = express.Router();
const User = require('../controllers/UserController.js');

/* GET users listing. */
router.get('/', User.getAllData);

router.get('/:id', User.getDataByID);

router.post('/', User.insertUser);

router.delete('/:id', User.destroyUser);

router.put('/:id',User.editUser);

module.exports = router;
