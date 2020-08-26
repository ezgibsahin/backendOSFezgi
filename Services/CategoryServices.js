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

function getCategoryById(req,res,next,id)
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
      //console.log(dataAllCategories)
      let mainCategoryArr = [];
      for (let i = 0; i < dataAllCategories.length; i++) 
      {
        //console.log(dataAllCategories[i].parent_category_id);
        //console.log(inputId);
          if (dataAllCategories[i].parent_category_id== inputId )
          {
              mainCategoryArr.push(dataAllCategories[i]);
          }    
      }
      res.render('Categories.ejs',
          {
              y: mainCategoryArr

          })
          //return response.body;
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
    console.log('denemeamk')
    if (error) throw new Error(error);
    let dataCategoryByParentId = JSON.parse(response.body);
    /*
    let element =[] ;
      for (let i = 0; i < dataCategoryByParentId.length; i++) 
      {
          if (dataCategoryByParentId[i].parent_category_id == inputParentId) 
          {
              element.push(dataCategoryByParentId[i]);
          }
          
      }    */
      res.render('Categories.ejs',{
          y: dataCategoryByParentId
      })
})
}

module.exports = {
    getAllCategories: getAllCategories,
    getCategoryByParentId: getCategoryByParentId,
    getCategoryById: getCategoryById

}