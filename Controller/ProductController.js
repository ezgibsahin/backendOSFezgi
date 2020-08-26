const productServices = require('../Services/ProductServices');

async function searchForProducts(req,res,next)
{
    const returnFromService = await productServices.searchForProducts(req,res);
    return returnFromService;
}

async function searchForProductsById(req,res,next,id)
{
    const returnSearchById = await productServices.searchForProductsById(req,res,next,id);
    return returnSearchById;
}

async function searchForProductsByPrimaryCategoryId(req,res,next,id)
{
    const returnSearchByPrimary = await productServices.searchForProductsByPrimaryCategoryId(req,res,next,id);
    return returnSearchByPrimary;
}

module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId
}