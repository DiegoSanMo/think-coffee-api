'use strict'

//Loaded the dependencies of express
var express = require('express');

//Loaded the module of the controller

var categoryProductController = require('../controllers/category_product.controller');

// Loaded the router of express

var api = express.Router();

api.get('/category-product', categoryProductController.testingCategory);

api.post('/create-category-product', categoryProductController.createCategoryP)

module.exports = api;