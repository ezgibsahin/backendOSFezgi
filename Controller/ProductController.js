const productServices = require('../Services/ProductServices');
function deneme(req,res,next)
{
    const returnFromService = productServices.deneme();
    res.render('Products.ejs', {
        deneme : returnFromService
    })
   
    return res.status(200).send(returnFromService);
}
function searchForProducts(req,res)
{
  
    var request = require('request');
    var options = {
    'method': 'GET',
    'url': 'https://osf-digital-backend-academy.herokuapp.com/api/products/product_search?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
    'headers': {
    }
  };
  request(options, function (error,response) {
    if (error) throw new Error(error);
    console.log(response.body);
   let temp = JSON.parse(response.body);
   //console.log(temp.length);
 
   res.render('Products.ejs', 
   {
       x: temp
      })
  });

    
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