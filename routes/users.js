var express = require('express')
var router = express.Router()
var controll = require('../controllers/users')

router.get('/', controll.getAll)
router.get('/:id', controll.getDetail)
router.post('/', controll.insert)
router.delete('/:id', controll.deleteOne)
router.patch('/:id', controll.updateOne)

module.exports = router
