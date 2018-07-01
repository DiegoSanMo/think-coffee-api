"use strict"

var token = require('jwt-simple');

var moment = require('moment');

var secretKey = "matocas";


// Method of the token
exports.createToken = function(user){

    var loadToken = {
        sub: user._id,
        name: user.name,
        now: moment().unix(),
        exp: moment().add(2, "days").unix()
    }

    return token.encode(loadToken, secretKey);

}