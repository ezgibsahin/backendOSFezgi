const productServices = require('../Services/ProductServices');

async function searchForProducts(req,res,next)
{
    const returnFrımService = await productServices.searchForProducts(req,res);
    return returnFrımService;
}



function deneme(req,res,next)
{
    const returnFromService = productServices.deneme();
    res.render('Products.ejs', {
        deneme : returnFromService
    })
    return res.status(200).send(returnFromService);
}

async function searchForProductsById(req,res,next,id)
{
    const returnPRoductId = await productServices.searchForProductsById(req,res,next,id);
    return returnPRoductId;
}



function searchForProductsByPrimaryCategoryId()
{

}
module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId,
    deneme: deneme
}