const { response } = require('express');

function categoryPage() {
    return "Hello this is category page!!!";
}

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
      let data = JSON.parse(response.body);
      console.log(data);
      let element =[] ;
      for (let index = 0; index < data.length; index++) {
          if (data[index].parent_category_id == 'mens-clothing') {
              element.push(data[index]);
          }
          
      }
      res.render('Categories.ejs',
          {
              y: data,
              categories: data

          })
  });

}


async function getCategoryById(req,res,next,id)
{
    var id = req.params.id;
    var request = require('request');
    var options = {
    'method': 'GET',
    'url':'https://osf-digital-backend-academy.herokuapp.com/api/categories/'+id+'?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
    'headers': {
    }
};
 request(options, function (error, response) 
{
    if (error) throw new Error(error);
    console.log(response.body);
    let allCategories = getAllCategories();
    let parsedCategories = JSON.parse(allCategories);
    let chosenCategory = [];
    for(var i=0;i<parsedCategories.length;i++)
    {
        if(parsedCategories[i].id === id)
        {
            chosenCategory.push(parsedCategories[i]);
        }
    }
/*
    res.render('Categories.ejs',
          {
              y: chosenCategory
          })*/
})

}
function getCategoriesByParentId()
{
/*https://osf-digital-backend-academy.herokuapp.com/api/categories/parent?parent_category_id=&secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC*/
}
module.exports = {
    categoryPage: categoryPage,
    getAllCategories: getAllCategories,
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId

}
  