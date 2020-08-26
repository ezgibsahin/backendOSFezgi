const authenticationServices = require('../Services/AuthenticationServices');


async function signup(req, res, next,name,email,password) {
   
    const returnSignup = await authenticationServices.signup(req,res,next,name,email,password);
    return returnSignup;
}

async function signin(req, res, next,email,password) {
   
    const returnSignin = await authenticationServices.signin(req,res,next,email,password);
    console.log("logged")
    return returnSignin;
}

async function auth (req,res,next)
{
    const returnAuth = await authenticationServices.auth(req,res,next);
    return returnAuth;
}


module.exports = {
    signup: signup,
    signin: signin,
    auth: auth
}