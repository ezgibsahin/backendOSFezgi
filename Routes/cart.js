const express = require('express')
const routes = express.Router();

routes.get('/',(req,res,next) =>{
    res.render('Cart.ejs');
});


module.exports = routes;
