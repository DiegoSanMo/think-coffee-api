'use strict'

//Loaded the dependencies of express
var express = require('express');
//Loaded the module of the controller
var userController = require('../controllers/user.controller');
// Loaded the router of express
var api = express.Router();

var md_auth = require("../token/auth");


api.get('/testing-user', md_auth.authentication, userController.testingUser);

api.post('/create-user', userController.createUser);

api.post('/login', userController.login);

api.put('/update-user/:id', md_auth.authentication, userController.updateUser);

api.delete('/delete-user/:id', md_auth.authentication, userController.deleteUser);


module.exports = api;