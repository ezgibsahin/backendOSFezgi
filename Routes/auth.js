const express = require('express')
const routes = express.Router();
const bodyParser = require('body-parser');
const authenticationController = require('../Controller/AuthenticationController');
const bcrypt = require('bcrypt')
const secretKey = "$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC ";

var lol =bodyParser.urlencoded({extended : false})

var jsonParser = bodyParser.json()

routes.get('/signup',function(req,res){
    res.render('Signup.ejs');

});
routes.get('/signin',function(req,res){
    res.render('Signin.ejs');


});

routes.post('/signup',lol, function(req,res){
    const inputName = req.body.name;
    const inputEmail = req.body.email;
    const inputPassword = req.body.password;
    const inputKey = secretKey;
    
    console.log(req.body.name + " " + req.body.email + " lol " + req.body.password + "sc" +secretKey)
    authenticationController.signup(req,res,inputName,inputEmail,inputPassword);
    res.redirect('/');
   
});

routes.post('/signin',lol,function(req,res){

    const inputEmail = req.body.email;
    const inputPassword = req.body.password;
    authenticationController.signin(req,res,inputEmail,inputPassword);
    res.redirect('/');
});


module.exports = routes;