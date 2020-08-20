const categoryServices = require('../Services/CategoryServices');

function categoryPage(req, res, next) {
    const returnFromService = categoryServices.categoryPage();
    return res.status(200).send(returnFromService);
}

function getAllCategories(req, res, next) {
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
        //console.log(data);
        res.render('Categories.ejs',
            {
                y: data
            })
    });


}
 function getCategoryById(id) {
    var request = require('request');
    var options = {
  'method': 'GET',
  'url':'https://osf-digital-backend-academy.herokuapp.com/api/categories/'+id+'?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});


}

function getCategoriesByParentId(id) {

}

module.exports = {
    categoryPage: categoryPage,
    getAllCategories: getAllCategories,
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId
}
