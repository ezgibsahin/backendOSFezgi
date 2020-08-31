const express = require('express')
const routes = express.Router();
const productController = require('../Controller/ProductController');


//GET products
// URL: /products/
routes.get('/',productController.searchForProducts);

//GET products by id
// URL: /products/:id
routes.get('/:id', function(req,res)
{
    var inputId = req.params.id;
    console.log(inputId);
    productController.searchForProductsByPrimaryCategoryId(req,res,inputId);
})



//GET products by primary category id
// URL: /products/:primary_category_id
routes.get('/:primary_category_id/:id', function(req,res)
{
    
    var inputPrimaryId = req.params.id;
    productController.searchForProductsById(req,res,inputPrimaryId);
})

//GET products from search wiht name
routes.get('/:d/:d/:d', function(req,res)
{ 
    console.log(req.query.searchString)
    var search =req.query.searchString;
    productController.searchForBar(req,res,search);
})
module.exports = routes;