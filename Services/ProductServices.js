const { response } = require('express');


function deneme(error,req,res) {

  var data = "Hello this is category page!!!";
  return data;
  
}

function searchForProducts(req,res,next)
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

function searchForProductsById(id)
{
    var request = require('request');
    var options = {
  'method': 'GET',
  'url': 'https://osf-digital-backend-academy.herokuapp.com/api/products/product_search/' + id +'?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
  'headers': {
    'Content-Type': 'application/json'
  }

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
}

function searchForProductsByPrimaryCategoryId()
{
    var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://osf-digital-backend-academy.herokuapp.com/api//products/product_search?primary_category_id:=&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
  'headers': {
    'Content-Type': 'application/json'
  }


};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


}



module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId,
    deneme: deneme
}