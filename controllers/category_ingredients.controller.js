"use scrict";

function testingCategoryIngredient(req, res) {
    res.status(200).send({message: "This is a testing of categories ingredient"})
}

module.exports = {
    testingCategoryIngredient
}