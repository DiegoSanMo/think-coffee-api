'use scrict'

const User = require('../models/user.model');

// import the dependency to encrypt the password
let bcrypt = require('bcrypt-nodejs');

//Method of testing
function testingUser( req, res){
    res.status(200).send({message: "Testing the controller of user"});
}


//Method to create a new user
function createUser( req, res ) {
    let user = new User();

    // Get request params
    let params = req.body;

    user.name = params.name;
    user.email = params.email;
    
    if(params.password){
        bcrypt.hash(params.password, null, null, function(err, hash){
            user.password = hash;
            if(params.user !== null){
                user.save((err, userSaved) => {
                    if( err ) {
                        res.status(500).send({ message: "Error al guardar usuario" })
                    } else {
                        res.status(200).send({ message: userSaved })
                    }
               })
            }
        })
    }

   
}
module.exports = {
    testingUser,
    createUser
}