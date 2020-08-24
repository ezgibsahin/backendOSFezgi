const categoryServices = require('../Services/CategoryServices');

function categoryPage(req, res, next) {
    const returnFromService = categoryServices.categoryPage();
    return res.status(200).send(returnFromService);
}

async function getCategorieById(req,res,next)
{
    const returnCategoriesById = await categoryServices.getCategoryById(req,res);
    return returnCategoriesById;
}

async function getAllCategories(req, res, next) {
   
    const returnAllCategories = await categoryServices.getAllCategories(req,res);
    return returnAllCategories;
}

function getCategoriesByParentId(id) {

}

module.exports = {
    categoryPage: categoryPage,
    getAllCategories: getAllCategories,
    getCategorieById: getCategorieById,
    getCategoriesByParentId: getCategoriesByParentId
}