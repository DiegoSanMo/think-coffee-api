'use strict'

const CategoryP = require('../models/category_product.model');

//Method of testing
function testingCategory( req, res){
    res.status(200).send({message: "Testing the controller of categories"});
}

function createCategoryP( req, res ){
    var category = new CategoryP;
    
    var params = req.body;

    category.name = params.name;

    if( params.name){
        if(params.name !== null){
            category.save((err, categorySave) =>{
                if( err ){
                    res.status(500).send({ message: "Error al guardar categoria de producto." })
                } else {
                    res.status(200).send({ message: categorySave })
                }
            })

        }
    }
}

module.exports = {
    testingCategory,
    createCategoryP
}