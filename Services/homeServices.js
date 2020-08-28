const categoryServices = require('../Services/CategoryServices');
const categoryController = require('../Controller/CategoryController');

function getCategorytohome(req,res,next)
{
    let data = categoryController.getAllCategories(req,res);
    res.render('Home.ejs',
    {
        y: data
    })

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
   // console.log(response.body);
   let temp = JSON.parse(response.body);
   //console.log(temp.length);
 
   res.render('Home.ejs', 
   {
     
       x: temp
      })
  });
}
module.exports = {
  
    etCategorytohome : getCategorytohome,
    searchForProducts:searchForProducts
   
}
  