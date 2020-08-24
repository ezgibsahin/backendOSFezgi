const productServices = require('../Services/ProductServices');

async function searchForProducts(req,res)
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

function searchForProductsById()
{

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