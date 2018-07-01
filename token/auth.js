"use strict"

var token = require("jwt-simple");
var moment = require("moment");
var secretKey = "matocas";

// =============================================================================
//                              METHOD AUTH
// =============================================================================

//CREATING A MIDDLEWARE

exports.authentication = ( req, res, next ) => {
    //Head of authentication
    if(!req.headers.authorization){
        return res.status(403).send({message: "La peticion no tiene la cabecera de autentificacion"})
    } else {
        console.log(req.headers.authorization)
        var tokenSend = req.headers.authorization.replace(/['"] + /g, '');
        // var tokenSend = req.headers.authorization.replace(/['"] + /g, '');
        try{
            var loadToken = token.decode(tokenSend, secretKey);
            if( loadToken.exp <= moment().unix() ){
                return res.status(403).send({message: "El token a expirado."});
            } 
        } catch(exception){
            console.log(exception)
            return res.status(403).send({message: "El token no es valido."})
        }
        req.tokenUser = loadToken;
        next();
    }
}