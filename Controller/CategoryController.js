const categoryServices = require('../Services/CategoryServices');

function categoryPage(req, res, next){
    const returnFromService = categoryServices.categoryPage();
    return res.status(200).send(returnFromService);
}

function getAllCategories(req,res,next)
{
    const returnAllCategories = categoryServices.getAllCategories();
    return res.status(200).send(returnAllCategories);
}
function getCategoryById(id)
{

}

function getCategoriesByParentId(id)
{

}

module.exports = {
    categoryPage : categoryPage,
    getAllCategories: getAllCategories,
    getCategoryById: getCategoryById,
    getCategoriesByParentId: getCategoriesByParentId
  }
  