function searchForProductsById(id)
{

    var request = require('request');
    var options = {
  'method': 'GET',
  'url': 'https://osf-digital-backend-academy.herokuapp.com/api/products/product_search/' + id +'?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"secretKey":"$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC","":""})

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
  },
  body: JSON.stringify({"secretKey":"$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC","":""})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


}

module.exports = {

    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId
}