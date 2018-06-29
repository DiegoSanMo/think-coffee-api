'use strict'

//Loaded the dependencies of express
let express = require('express');

//Loaded the module of the controller

let userController = require('../controllers/user.controller');

// Loaded the router of express

let api = express.Router();

api.get('/testing-user', userController.testingUser);

api.post('/create-user', userController.createUser);

module.exports = api;