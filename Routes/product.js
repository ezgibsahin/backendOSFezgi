const express = require('express')
const routes = express.Router();
const productController = require('../Controller/ProductController');


routes.get('/',(req,res,next) =>{

   
        res.render('Products.ejs');
   
});

//routes.get('/', categoryController.categoryPage);

//Send A GET request to /product/product_search to Search for Products





module.exports = routes;
