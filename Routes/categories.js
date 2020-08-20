const express = require('express')
const routes = express.Router();
const categoryController = require('../Controller/CategoryController');
const baseURL = 'https://osf-digital-backend-academy.herokuapp.com/api/';

//secret key   $2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC 
routes.get('/',(req,res,next) =>{
    res.render('Categories.ejs');
});

// GET all categories
// /categories?secretKey=<secretKey>
routes.get('/allCategories', categoryController.getAllCategories);


//GET category by id
// URL: /categories/<id-of-the-category>
// /categories/mens-clothing-jackets?secretKey=<secretKey>
routes.get(':id',categoryController.getCategoryById);


//GET category by parent id
// /categories/parent/mens-clothing?secretKey=<secretKey></secretKey>
// URL: /categories/parent/<id-of-the-parent-category>
routes.get('/parent/:parent_category_id',categoryController.getCategoriesByParentId);


module.exports = routes;