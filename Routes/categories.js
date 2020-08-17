const express = require('express')
const routes = express.Router();
const categoryController = require('../Controller/CategoryController');
const baseURL = 'https://osf-digital-backend-academy.herokuapp.com/api/';

//secret key   $2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC 
routes.get('/',(req,res,next) =>{
    res.render('Categories.ejs');
});
/*
routes.get('/parent',(req,res,next) =>{
    res.render('Categories.ejs');
});*/




// /categories?secretKey=<secretKey>

routes.get('/allCategories', categoryController.getAllCategories);

// URL: /categories/<id-of-the-category>

// /categories/mens-clothing-jackets?secretKey=<secretKey>

routes.get(':id',categoryController.getCategoryById);

// /categories/parent/mens-clothing?secretKey=<secretKey></secretKey>
// URL: /categories/parent/<id-of-the-parent-category>

routes.get('/parent/:id',categoryController.getCategoriesByParentId);




module.exports = routes;
