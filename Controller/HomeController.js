const homeServices = require('../Services/homeServices');

//Rendering home page
function getHomePage(req, res) {
    res.render('Home.ejs');
}


//Function for the return home page info from Home Service
//function for displaying products on home page
async function searchForProducts(req,res)
{
    const returnFromService = await homeServices.searchForProducts(req,res);
    try{
        
        return returnFromService;
    }catch(error)
    {
        res.render('Error.ejs'); 

    }
    
}
module.exports = {
    getHomePage: getHomePage,
    searchForProducts:searchForProducts
  }
  