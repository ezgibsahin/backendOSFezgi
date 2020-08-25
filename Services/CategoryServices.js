const { response } = require('express');


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
      res.render('Categories.ejs',
          {
              y: dataAllCategories

          })
          //return response.body;
  });

}

function getmains(req,res,next,id)
{
  var inputId = req.params.id;
  console.log(inputId);
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
      console.log(dataAllCategories)
      let mainCategoryArr = [];
      for (let index = 0; index < dataAllCategories.length; index++) 
      {
        //console.log(dataAllCategories[index].parent_category_id);
        //console.log(inputId);
          if (dataAllCategories[index].parent_category_id == inputId )
          {
              
              mainCategoryArr.push(dataAllCategories[index]);
          }
          
      }
           
     // console.log(dataAllCategories);  
      res.render('Categories.ejs',
          {
              y: mainCategoryArr

          })
          //return response.body;
  });

}

async function getCategoryById(req,res,next,id)
{
    var inputId = req.params.id;
    console.log(inputId);
    var request = require('request');
    var options = {
    'method': 'GET',
    'url':'https://osf-digital-backend-academy.herokuapp.com/api/categories/parent/'+inputId+'?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
    'headers': {
    }
};
 request(options, function (error, response) 
{
    console.log('denemeamk')
    if (error) throw new Error(error);


    let dataCategoryById = JSON.parse(response.body);
    
    //console.log(response.body)
     
      let element =[] ;
      for (let index = 0; index < dataCategoryById.length; index++) 
      {
          if (dataCategoryById[index].parent_category_id == inputId) 
          {
              element.push(dataCategoryById[index]);
          }
          
      }
      
      res.render('Categories.ejs',{
          y: dataCategoryById
      })
  
})

}
function getCategoriesByParentId()
{
/*https://osf-digital-backend-academy.herokuapp.com/api/categories/parent?parent_category_id=&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC*/
}
module.exports = {
    getAllCategories: getAllCategories,
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId,
    getmains: getmains

}