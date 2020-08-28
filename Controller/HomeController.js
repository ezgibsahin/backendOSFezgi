const homeServices = require('../Services/homeServices');




function getHomePage(req, res) {
    res.render('Home.ejs');
}

async function searchForProducts(req,res)
{
    const returnFrımService = await homeServices.searchForProducts(req,res);
    return returnFrımService;
}



module.exports = {
    getHomePage: getHomePage,
    searchForProducts:searchForProducts
  }
  