const express = require('express')
const routes = express.Router();
const productController = require('../Controller/ProductController');
//const { Router } = require('express');

routes.get('/',productController.searchForProducts);

routes.get('/deneme',productController.deneme);

//Send A GET request to /product/product_search to Search for Products

// ​URL: /products/product_search
// /products/product_search?id=25565189&secretKey=<secretKey>
// /products/product_search?primary_category_id=womens-clothing-tops&secretKey=<secretKey>​

//routes.get('/product_search',productController.searchForProducts);

//search products by id

// https://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id=&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC

routes.get('/product_search/:id', productController.searchForProductsById);

// https://osf-digital-backend-academy.herokuapp.com/api//products/product_search?primary_category_id:=&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC

routes.get('/product_search/:primary_category_id',productController.searchForProductsByPrimaryCategoryId);
module.exports = routes;
