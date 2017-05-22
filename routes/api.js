const express = require('express');
const router = express.Router();
// const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/signup',userController.signup)

router.post('/signin',userController.signin)

router.get('/users',userController.authAdmin,userController.getAll) //admin only

router.get('/users/:id',userController.authGeneral,userController.getById) //admin and authenticated user

router.post('/users',userController.authAdmin,userController.create) //admin only

router.delete('/users/:id',userController.authAdmin,userController.deleteById) //admin only

router.put('/users/:id',userController.authGeneral,userController.updateById) //admin and authenticated user

module.exports = router;