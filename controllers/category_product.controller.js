"use scrict";

//Method of testing
function testingCategory( req, res){
    res.status(200).send({message: "Testing the controller of categories"});
}

module.exports = {
    testingCategory
}