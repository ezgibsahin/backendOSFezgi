const express = require('express');
const routes = express.Router();
const homeController = require('../Controller/HomeController');


routes.get('/helloWorld', homeController.helloWorld);
routes.get('/',homeController.getHomePage);


routes.get('/',(req,res,next) =>{
    //res.send('Welcome to my ecommerce website');
    res.render('Home.ejs')
});

module.exports = routes;
