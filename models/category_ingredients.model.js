'use strict'
const mongoose = require('mongoose');

// save a complete collection in a specifict document
let Schema = mongoose.Schema;

//Creating a schema with the attributes

let categoryIngredientsSchema = Schema({
    name: String
});

module.exports = mongoose.model('categoryIngredients', categoryIngredientsSchema)