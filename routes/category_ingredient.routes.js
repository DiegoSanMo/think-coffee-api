'use strict'

//Loaded the dependencies of express
const express = require('express');

//Loaded the module of the controller

let categoryIngredientController = require('../controllers/category_ingredients.controller');

// Loaded the router of express

let api = express.Router();

api.get('/category-ingredient', categoryIngredientController.testingCategoryIngredient);

api.post('/create-category-ingredient', categoryIngredientController.createCategoryI)

module.exports = api;