'use strict'
const mongoose = require('mongoose');

// save a compvare collection in a specifict document
var Schema = mongoose.Schema;

//Creating a schema with the attributes

var categoryIngredientsSchema = Schema({
    name: String
});

module.exports = mongoose.model('category_ingredients', categoryIngredientsSchema)