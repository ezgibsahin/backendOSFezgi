const productServices = require('../Services/ProductServices');

async function searchForProducts(req,res)
{
    try{
        const returnFromService = await productServices.searchForProducts(req,res);
        return returnFromService;
    }catch(error)
    {
        res.render('Error.ejs'); 

    }
   
}

async function searchForProductsById(req,res,id)
{
    try{
        const returnSearchById = await productServices.searchForProductsById(req,res,id);
        return returnSearchById;
    }catch(error)
    {
        res.render('Error.ejs'); 

    }
    
}

async function searchForProductsByPrimaryCategoryId(req,res,id)
{
    try{
        let returnPRoductId = await productServices.searchForProductsByPrimaryCategoryId(req,res,id);
        return returnPRoductId;
    }catch(error)
    {
        res.render('Error.ejs'); 

    }
    
}
module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId
}