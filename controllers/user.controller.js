'use scrict'

const User = require('../models/user.model');
var token = require('../token/token');

// import the dependency to encrypt the password
var bcrypt = require('bcrypt-nodejs');

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

//Method to login users
function login(req, res){

    var params = req.body;

    var name = params.name;
    var email = params.email;
    var password = params.password;

    // console.log(params)
    User.findOne({
        email: email
    }, (err, userSelected) => {
        if(err){
            res.status(500).send({message: "Error al ingresar el usuario"})
        }
        else {
            if(!name){
                res.status(404).send({message: "El usuario no existe"})
            } else {
                // res.status(200).send({userSelected})
                bcrypt.compare(password, userSelected.password, (err, ok) => {
                    if(ok){
                        if(params.token){
                            res.status(200).send({token: token.createToken(userSelected)})
                        }
                        // res.status(200).send({userSelected})
                    } else {
                        res.status(404).send({message: "El usuario no ha podido ingresar"})
                    }
                })
            }
        }

    })
}

//Method to update user data
function updateUser(req, res){

}
module.exports = {
    testingUser,
    createUser,
    updateUser,
    login
}