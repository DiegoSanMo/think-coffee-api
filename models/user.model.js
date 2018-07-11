'use strict'

const mongoose = require('mongoose');

// save a compvare collection in a specifict document
var Schema = mongoose.Schema;

//Creating a schema with the attributes

var userSchema = Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('user', userSchema)