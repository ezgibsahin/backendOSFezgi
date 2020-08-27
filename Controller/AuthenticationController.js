const authenticationServices = require('../Services/AuthenticationServices');


async function signup(req, res,name,email,password) {
   
    const returnSignup = await authenticationServices.signup(req,res,name,email,password);
    return returnSignup;
}

async function signin(req, res,email,password) {
   
    const returnSignin = await authenticationServices.signin(req,res,email,password);
    console.log("logged")
    return returnSignin;
}


module.exports = {
    signup: signup,
    signin: signin
}