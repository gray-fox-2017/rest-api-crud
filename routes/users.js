var express = require('express');
var router = express.Router();
const user_controller = require('../controllers/UserController.js');

/* GET users listing. */

/**/

router.use('/:id', user_controller.auth);
router.use('/', user_controller.auth);

router.get('/', user_controller.getAllData);

router.get('/:id', user_controller.getDataByID);

router.post('/', user_controller.insertUser);

router.delete('/:id', user_controller.destroyUser);

router.put('/:id',user_controller.editUser);


module.exports = router;
