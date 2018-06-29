'use strict'

const mongoose = require('mongoose');

// save a complete collection in a specifict document
let Schema = mongoose.Schema;

//Creating a schema with the attributes

let userSchema = Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('user', userSchema)