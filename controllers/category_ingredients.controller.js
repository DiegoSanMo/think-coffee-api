'use strict'
var CategoryIngredient = require('../models/category_ingredients.model')
function testingCategoryIngredient(req, res) {
    res.status(200).send({message: "This is a testing of categories ingredient"})
}

function createCategoryI(req, res){
    let categoryIngredient = new CategoryIngredient;

    let params = req.body;
    categoryIngredient.name = params.name;

    if(params.name){
        if( params.name !== null){
            categoryIngredient.save((err, categorySave) =>{
                if( err ){
                    res.status(500).send({message: "Error al crear categoria de ingrediente."});
                } else {
                    res.status(200).send({ message: categorySave});
                }
            })
        } 
    }
}

module.exports = {
    testingCategoryIngredient,
    createCategoryI
}