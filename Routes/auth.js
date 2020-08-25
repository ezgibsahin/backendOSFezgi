const express = require('express')
const routes = express.Router();
const authenticationController = require('../Controller/AuthenticationController');
const bcrypt = require('bcrypt')


routes.post('/signin',authenticationController.signin);

routes.post('/signup',function(req,res,next){
 
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
    const signedUser = authenticationController.signup()

});
module.exports = routes;