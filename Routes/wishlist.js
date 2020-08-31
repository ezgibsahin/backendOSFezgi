const express = require('express')
const routes = express.Router();

routes.get('/',(req,res,next) =>{
    res.render('Wishlist.ejs');
});



module.exports = routes;
