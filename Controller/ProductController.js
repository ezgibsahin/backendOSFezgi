const productServices = require('../Services/ProductServices');

async function searchForProducts(req,res)
{
    const returnFromService = await productServices.searchForProducts(req,res);
    return returnFromService;
}

async function searchForProductsById(req,res,id)
{
    const returnSearchById = await productServices.searchForProductsById(req,res,id);
    return returnSearchById;
}

async function searchForProductsByPrimaryCategoryId(req,res,id)
{
    let returnPRoductId = await productServices.searchForProductsByPrimaryCategoryId(req,res,id);
    return returnPRoductId;
}
module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId
}