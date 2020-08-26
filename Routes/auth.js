const express = require('express')
const routes = express.Router();
const authenticationController = require('../Controller/AuthenticationController');
const bcrypt = require('bcrypt')
const secretKey = "$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC ";


routes.get('/', authenticationController.auth);

routes.get('/signup',function(req,res){
    res.render('Signup.ejs');

});
routes.get('/signin',function(req,res){
    res.render('Signin.ejs');

});

routes.post('/signup',function(req,res,next){
    var inputName = req.params.name;
    var inputEmail = req.params.email;
    var inputPassword = req.params.password;
    var inputKey = secretKey;
    authenticationController.signup(req,res,next,inputKey,inputName,inputEmail,inputPassword);
   
   /*
        bcrypt.hash(req.body.password,10,(err,hash)=>{
           if(error)
           {
               return res.status(500).json({
                   error:err
               });
           }
   
           else{
                name = eq.body.name;
                email = req.body.email;
                password = hash;
           }
       });
       const signedUser = authenticationController.signup()*/
   
});

routes.post('/signin',function(req,res,next){

    var inputEmail = req.params.email;
    var inputPassword = req.params.password;
    var inputKey = secretKey;
    authenticationController.signin(req,res,next,inputKey,inputEmail,inputPassword);
});


module.exports = routes;