const categoryServices = require('../Services/CategoryServices');

function categoryPage(req, res, next){
    const returnFromService = categoryServices.categoryPage();
    return res.status(200).send(returnFromService);
}


module.exports = {
    categoryPage : categoryPage
  }
  