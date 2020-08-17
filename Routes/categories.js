const express = require('express')
const routes = express.Router();
const categoryController = require('../Controller/CategoryController');
const baseURL = 'https://osf-digital-backend-academy.herokuapp.com/api/';

//secret key   $2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC 
routes.get('/',(req,res,next) =>{
    res.render('Categories.ejs');
});

routes.get('/allCategories', categoryController.getAllCategories);


module.exports = routes;
