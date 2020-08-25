const homeServices = require('../Services/homeServices');




function getHomePage(req, res) {
    res.render('Home.ejs');
}


async function getCAtegorytoHome(req,res,next)
{
    const returnCategoriesById = await homeServices.getCategorytohome(req,res);
    return returnCategoriesById;
}
module.exports = {
    getHomePage: getHomePage,
    getCAtegorytoHome : getCAtegorytoHome
  }
  