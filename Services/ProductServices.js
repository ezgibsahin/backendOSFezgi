const { response } = require('express');

//Function for fetching products
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

    //Rendering the Products.ejs to display products
    try{
      res.render('Products.ejs', 
      {
        x: temp
      })
      //If no error send all categories
      res.status(200).send(temp);
     }catch(error)
      {
      //If error render Error.js
       res.render('Error.ejs');
     }
  
  });
}

//Function for fetching products by primary category id
function searchForProductsByPrimaryCategoryId(req,res,id)
{
  //console.log(id);
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

   for (let i = 0; i < temp.length; i++) 
   {
           products.push(temp[i]);
   }

   try{
    res.render('Products.ejs', 
    {
        x: products
       })
       //If no error send products by primary category id
       res.status(200).send(products);
   }catch(error)
   {
       //If error render Error.js
       res.render('Error.ejs');
   }
  
  });
}


//Function for fetching products by id
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

  try{
    res.render('ProductDetail.ejs',
    {
        x:data
    }) 
    //If no error send products  id
    res.status(200).send(data);
}catch(error)
{
    //If error render Error.js
    res.render('Error.ejs');
  }
  
});
}

//Function for fetching products from search bar
function searchForBar(req,res,id)
{
  let sid = id;
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
    for (let i = 0; i < temp.length; i++) {
     
      let str = temp[i].page_title.toLowerCase();//String for page title
      
      let str1 = temp[i].page_description.toLowerCase();//String for page description
      
      if (str.includes(sid)) {// If page title includes sid push to the searchres
        searchres.push(temp[i])
      } else {
        if (str1.includes(sid)) {// If page description includes sid push to the searchres
          searchres.push(temp[i])
        }
      }
    
    }
    //Rendering the Product.ejs with search results.
    try{
      res.render('Products.ejs', 
      {
          x: searchres
         })
         //If no error send the product as search results from the search bar
         res.status(200).send(searchres);
    }catch(error)
    {
        //If error render Error.js
        res.render('Error.ejs');
      }
  });
}

module.exports = {
    searchForProducts: searchForProducts,
    searchForProductsById: searchForProductsById,
    searchForProductsByPrimaryCategoryId: searchForProductsByPrimaryCategoryId,
    searchForBar:searchForBar
}