const { response } = require('express');

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
   let temp = JSON.parse(response.body);
   res.render('Products.ejs', 
   {
       x: temp
      })
  });
}
function searchForProductsByPrimaryCategoryId(req,res,id)
{
  console.log(id);
  var request = require('request');
    var options = {
    'method': 'GET',
    'url': 'https://osf-digital-backend-academy.herokuapp.com/api/products/product_search?primary_category_id='+id+'&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
    'headers': {
    }
  };
  request(options, function (error,response) {
    if (error) throw new Error(error);
    
   let temp = JSON.parse(response.body);
   //console.log(temp.length);
   let products = [];

   for (let index = 0; index < temp.length; index++) 
   {
           products.push(temp[index]);
   }
   res.render('Products.ejs', 
   {
       x: products
      })
  });
}
function searchForProductsById(req,res,id)
{
  var inputId = req.params.id;
  console.log(inputId);
  var request = require('request');
  var options = {
  'method': 'GET',
  'url': 'https://osf-digital-backend-academy.herokuapp.com/api/products/product_search?id='+ id +'&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  let data = JSON.parse(response.body);
  res.render('ProductDetail.ejs',
  {
      x:data
  })
});
}

/*
function searchForProductsByPrimaryCategoryId(req,res,id)
{
  var inputPrimaryId = req.params.id;
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://osf-digital-backend-academy.herokuapp.com/api/products/product_search?'+inputPrimaryId+ '&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);

    let productsPrimaryId = JSON.parse(response.body);
    let primary =[] ;
      for (let i = 0; i < productsPrimaryId.length; i++) 
      {
          if (productsPrimaryId[i].primary_category_id == inputPrimaryId) 
          {
              primary.push(productsPrimaryId[i]);
          }
          
      }    
      res.render('Categories.ejs',{
          y: primary
      })
})

}*/
function searchForBar(req,res,id)
{
  let sid = id.toLowerCase();
  var request = require('request');
    var options = {
    'method': 'GET',
    'url': 'https://osf-digital-backend-academy.herokuapp.com/api/products/product_search?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
    'headers': {
    }
  };
  request(options, function (error,response) {
    if (error) throw new Error(error);
   let temp = JSON.parse(response.body);
   let searchres =[];
    for (let index = 0; index < temp.length; index++) {
     
      let str = temp[index].page_title.toLowerCase();
      
      let str1 = temp[index].page_description.toLowerCase();
      
      if (str.includes(sid)) {
        searchres.push(temp[index])
      } else {
        if (str1.includes(sid)) {
          searchres.push(temp[index])
        }
      }
    
    }
   res.render('Products.ejs', 
   {
       x: searchres
      })
  });
}

module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId,
    searchForBar:searchForBar
}