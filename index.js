'use strict'
require('dotenv/config');
// =============================================================================
//                              MONGO DB LIBRARY
// =============================================================================

var mongooes = require('mongoose');

// =============================================================================
//                              EXPRESS MODULE
// =============================================================================

var app = require('./app');
const port = process.env.DB_PORT || 1234;

// =============================================================================
//                              CONNECTION WITH MONGO 
// =============================================================================

mongooes.connect(`mongodb://localhost:${port}/${ process.env.DB_NAME }`, (err, res) => {
    if(err){
        throw err;
    }
    else{
        console.log("The connection it's succesful");
        app.listen(port, () => {
            console.log("Servidor del api rest en http:localhost:" + port)
        })
    }
});