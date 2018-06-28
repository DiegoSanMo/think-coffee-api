"use strict";
require('dotenv/config');
// =============================================================================
//                              MONGO DB LIBRARY
// =============================================================================

var mongooes = require('mongoose');

// =============================================================================
//                              EXPRESS MODULE
// =============================================================================

var app = require('./app');
var port = process.env.PORT || 1234;

// =============================================================================
//                              CONNECTION WITH MONGO 
// =============================================================================

mongooes.connect(`mongodb://localhost:${ process.env.PORT }/${ process.env.DB_NAME }`, (err, res) => {
    if(err){
        throw err;
    }
    else{
        console.log("The connection it's succesful");
        app.listen(port, function(){
            console.log("Servidor del apirest en http:localhost:"+port)
        })
    }
});