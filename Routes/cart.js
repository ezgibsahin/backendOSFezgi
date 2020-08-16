const express = require('express')
const routes = express.Router();
//const categoryController = require('../Controller/CategoryController');


routes.get('/',(req,res,next) =>{
    res.render('Cart.ejs');
});


//routes.get('/', categoryController.categoryPage);


module.exports = routes;
