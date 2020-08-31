const express = require('express')
const routes = express.Router();
const productController = require('../Controller/ProductController');
const categoryController = require('../Controller/CategoryController');

routes.get('/',productController.searchForProducts);


routes.get('/:id', function(req,res)
{
    var inputId = req.params.id;
    console.log(inputId);
    productController.searchForProductsByPrimaryCategoryId(req,res,inputId);
})

routes.get('/:primary_category_id/:id', function(req,res)
{
    
    var inputPrimaryId = req.params.id;
    console.log("lol"+inputPrimaryId);
    productController.searchForProductsById(req,res,inputPrimaryId);
})

routes.get('/:d/:d/:d', function(req,res)
{ 
    console.log(req.query.searchString)
    var search =req.query.searchString;
    productController.searchForBar(req,res,search);
})
module.exports = routes;