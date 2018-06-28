"use strict"

var mongoose = require('mongoose');

// save a complete collection in a specifict document
var schema = mongoose.Schema;

//Creating a schema with the attributes

var categoryProducSchema = schema({
    name: String
});

module.exports = mongoose.model('categoryProduct', categoryProducSchema)