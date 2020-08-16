const homeServices = require('../Services/homeServices');

function helloWorld(req, res, next){
    try
    {
        const returnFromService = homeServices.helloWorld();
        return res.status(200).send(returnFromService);
    }catch(err)
    {
        res.status(500).json({message:err.message});
    }
}


function sayHi(req,res,next){
    const returnHi = homeServices.sayHi();
    return res.status(200).send(returnHi);
}

function getHomePage(req, res) {
    res.render('Home.ejs');
}

module.exports = {
    helloWorld: helloWorld,
    sayHi: sayHi,
    getHomePage: getHomePage
  }
  