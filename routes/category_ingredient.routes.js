"use strict";

//Loaded the dependencies of express
var express = require('express');

//Loaded the module of the controller

var categoryIngredientController = require('../controllers/category_ingredients.controller');

// Loaded the router of express

var api = express.Router();

api.get('/category-ingredient', categoryIngredientController.testingCategoryIngredient);

module.exports = api;