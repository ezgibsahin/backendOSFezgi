const { response } = require('express');

function categoryPage() {
    return "Hello this is category page!!!";
}

function getAllCategories()
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
        let parsedCategories = JSON.parse(response.body);
        //console.log(parsedCategories);
        for(var i = 0; i < parsedCategories.length; i++) 
        {
            var obj = parsedCategories[i];
            console.log(obj.id);
        }
        return parsedCategories;
    });   
}

 function getCategoryById(id)
{
    var request = require('request');
    var options = {
        'method': 'GET',
        'url': 'https://osf-digital-backend-academy.herokuapp.com/api/categories/'+id+'?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
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
  