const homeServices = require('../Services/homeServices');

function getHomePage(req, res) {
    res.render('Home.ejs');
}

async function searchForProducts(req,res)
{
    const returnFrımService = await homeServices.searchForProducts(req,res);
    try{
        
        return returnFrımService;
    }catch(error)
    {
        res.render('Error.ejs'); 

    }
    
}



module.exports = {
    getHomePage: getHomePage,
    searchForProducts:searchForProducts
  }
  