const productServices = require('../Services/ProductServices');

//Function the return products from Product Service
async function searchForProducts(req,res)
{
 
        const returnFromService = await productServices.searchForProducts(req,res);
        return returnFromService;
   
}
//Function the return products by id from Product Service
async function searchForProductsById(req,res,id)
{
    
        const returnSearchById = await productServices.searchForProductsById(req,res,id);
        return returnSearchById;
 
}
//Function the return products by primary category id from Product Service

async function searchForProductsByPrimaryCategoryId(req,res,id)
{
    
        let returnPRoductId = await productServices.searchForProductsByPrimaryCategoryId(req,res,id);
        return returnPRoductId;
 
    
}

//Function the return search results from Product Service

async function searchForBar(req,res,id)
{
   
        const returnSearchById = await productServices.searchForBar(req,res,id);
        return returnSearchById;
   
}
module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId,
    searchForBar:searchForBar
}