const { response } = require('express');
const ProductServices = require('./ProductServices');
const productController = require('../Controller/ProductController');


// Function for fetching all the categories.
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
    //Rendering the Categories.ejs to display all categories
     try{
        res.render('Categories.ejs',
          {
              y: dataAllCategories
           
          })
          //If no error send all categories
          res.status(200).send(dataAllCategories);
    }catch(error)
    {
        //If error render Error.js
        res.render('Error.ejs');
    }
  });

}


// Function for fetching the categories according to one id.
function getCategoryById(req,res,next,id)
{
    var inputId = req.params.id;

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
         
          
          let mainCategoryArr = []; //Category array.
          let products;
          
        var inputId = req.params.id; // Input Category Id.
        //From all categories push the one/ones into the mainCategoryArr that matches the input id
          for (let i = 0; i < dataAllCategories.length; i++) 
          {
              if (dataAllCategories[i].parent_category_id == inputId )
              {
                  
                  mainCategoryArr.push(dataAllCategories[i]);
              }
              
          }

          var inputId = req.params.id;
          console.log(inputId);
    
          //When mainCategoryArr is undefined or empty redirect to product page.
          if (mainCategoryArr === undefined || mainCategoryArr.length == 0) {
           res.redirect('/products/'+inputId);
            }
            //Rendering the Categories.ejs to display categories by id.
            try{
                res.render('Categories.ejs',
                {
                    y: mainCategoryArr,
             
                })  
                //If no error send category array
                res.status(200).send(mainCategoryArr) ;
            }catch(error)
            {
                //If error render Error.ejs
                res.render('Error.ejs');
            }

      });
}


// Function for fetching the categories according to the parent id.
async function getCategoryByParentId(req,res,next,id)
{
    var inputParentId = req.params.id; //Request parent id
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
     //Rendering the Categories.ejs to display categories by parent id.
      try{
        res.render('Categories.ejs',{
            y: dataCategoryByParentId
        })
        //If no error send category by parent id
        res.status(200).send(dataCategoryByParentId);
    }catch(error)
    {
        //If error render Error.ejs
        res.render('Error.ejs');
    }
     
})
}

module.exports = {
    getAllCategories: getAllCategories,
    getCategoryByParentId: getCategoryByParentId,
    getCategoryById: getCategoryById

}