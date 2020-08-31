const express = require('express')
const routes = express.Router();
const categoryController = require('../Controller/CategoryController');
const baseURL = 'https://osf-digital-backend-academy.herokuapp.com/api/';

//secret key   $2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC 

// GET all categories
// URL /categories/
routes.get('/', categoryController.getAllCategories);


//GET category by id
// URL: /categories/:id

routes.get('/:id', function(req,res,next)
{
    var inputId = req.params.id;
    categoryController.getCategoryById(req,res,next,inputId);
});


//GET category by parent id
// URL: /categories/parent/<id-of-the-parent-category>
routes.get('/parent/:id', function(req,res,next)
{
    var inputId = req.params.id;
    categoryController.getCategoriesByParentId(req,res,next,inputId);
});

module.exports = routes;