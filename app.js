'use strict'

const express = require('express');
const bodyParser = require('body-parser');

// app is the object of express, this is the aplication's motor of backend
const app = express();

// =============================================================================
//                              USING BODY PARSE
// =============================================================================

// this convert the data in json object
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// =============================================================================
//                              LOAD ROUTES
// =============================================================================

var categoryProdRoute = require('./routes/category_product.routes');
var categoryIngRoute = require('./routes/category_ingredient.routes');
var userRoute = require('./routes/user.routes');

app.use('/api', categoryProdRoute);
app.use('/api', categoryIngRoute);
app.use('/api', userRoute);
// =============================================================================
//                              ROUTE BASE
// =============================================================================

// app.get("/pruebas", (req, res) => {
//     //              king of status
//     //                  200 OK
//     //                  404 PETITION NOT FOUND
//     //                  500 ERROR IN THE SERVER
//     res.status(200).send({ message: "Welcome"})
// })

module.exports = app;