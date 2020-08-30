const { response } = require('express');
const ProductServices = require('./ProductServices');
const productController = require('../Controller/ProductController');

function getAllCategories(req,res,next)
{
  var request = require('request');
  var options = {
      'method': 'GET',
      'url': 'https://osf-digital-backend-academy.herokuapp.com/api/categories?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
      'headers': {
      }
  };
  request(options, function (error, response) {
      if (error) throw new Error(error); 
      let dataAllCategories = JSON.parse(response.body);
     // console.log(dataAllCategories);  

     try{
        res.render('Categories.ejs',
          {
              y: dataAllCategories
           
          })

          res.status(200).send(dataAllCategories);
    }catch(error)
    {
        res.render('Error.ejs');
    }
     
          //return response.body;
  });

}

function getCategoryById(req,res,next,id)
{
    var inputId = req.params.id;
     // console.log(inputId);
      var request = require('request');
      var options = {
          'method': 'GET',
          'url': 'https://osf-digital-backend-academy.herokuapp.com/api/categories/?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
          'headers': {
          }
      };
      request(options, function (error, response) {
          if (error) throw new Error(error); 
          let dataAllCategories = JSON.parse(response.body);
         // console.log(dataAllCategories)
          let mainCategoryArr = [];
          let products;
          
        var inputId = req.params.id;
        console.log(inputId);
          for (let index = 0; index < dataAllCategories.length; index++) 
          {
              if (dataAllCategories[index].parent_category_id == inputId )
              {
                  
                  mainCategoryArr.push(dataAllCategories[index]);
              }
              
          }

          var inputId = req.params.id;
          console.log(inputId);
    
          if (mainCategoryArr === undefined || mainCategoryArr.length == 0) {
           res.redirect('/products/'+inputId);
            }
    
            try{
                res.render('Categories.ejs',
                {
                    y: mainCategoryArr,
             
                })  
                res.status(200).send(mainCategoryArr) ;
            }catch(error)
            {
                res.render('Error.ejs');
            }

      });
}

async function getCategoryByParentId(req,res,next,id)
{
    var inputParentId = req.params.id;
    console.log(inputParentId);
    var request = require('request');
    var options = {
    'method': 'GET',
    'url':'https://osf-digital-backend-academy.herokuapp.com/api/categories/parent/'+inputParentId+'?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
    'headers': {
    }
};
 request(options, function (error, response) 
{
  
    if (error) throw new Error(error);
    let dataCategoryByParentId = JSON.parse(response.body);    
      try{
        res.render('Categories.ejs',{
            y: dataCategoryByParentId
        })
        res.status(200).send(dataCategoryByParentId);
    }catch(error)
    {
        res.render('Error.ejs');
    }
     
})
}

module.exports = {
    getAllCategories: getAllCategories,
    getCategoryByParentId: getCategoryByParentId,
    getCategoryById: getCategoryById

}