const express = require('express')
const routes = express.Router();
const productController = require('../Controller/ProductController');


routes.get('/',(req,res,next) =>{

   
        res.render('Products.ejs');
   
});



//Send A GET request to /product/product_search to Search for Products

// ​URL: /products/product_search
// /products/product_search?id=25565189&secretKey=<secretKey>
// /products/product_search?primary_category_id=womens-clothing-tops&secretKey=<secretKey>​

routes.get('/product_search',productController.searchForProducts);


module.exports = routes;
