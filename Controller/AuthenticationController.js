const authenticationServices = require('../Services/AuthenticationServices');


async function signup(req, res,name,email,password) {
   try{
    const returnSignup = await authenticationServices.signup(req,res,name,email,password);
    return returnSignup;
   }catch(error)
   {
    res.render('Error.ejs'); 
   }
    
}

async function signin(req, res,email,password) {
   try{
    const returnSignin = await authenticationServices.signin(req,res,email,password);
    console.log("logged")
    return returnSignin;
   }catch(error)
   {
    res.render('Error.ejs'); 
   }
   
}


module.exports = {
    signup: signup,
    signin: signin
}