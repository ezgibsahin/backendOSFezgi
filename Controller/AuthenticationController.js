const authenticationServices = require('../Services/AuthenticationServices');


async function signup(req, res, next) {
   
    const returnSignup = await authenticationServices.signup(req,res);
    return returnSignup;
}

async function signin(req, res, next) {
   
    const returnSignin = await authenticationServices.signin(req,res);
    return returnSignin;
}


module.exports = {
    signup: signup,
    signin: signin
}