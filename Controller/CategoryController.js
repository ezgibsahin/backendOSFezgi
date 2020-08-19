const categoryServices = require('../Services/CategoryServices');

function categoryPage(req, res, next){
    const returnFromService = categoryServices.categoryPage();
    return res.status(200).send(returnFromService);
}

async function getAllCategories()
{
    let parsedCategories = await categoryServices.getAllCategories();
    return res.status(200).send(parsedCategories);
}
async function getCategoryById(id)
{
    let returnAllCategoriesById = await categoryServices.getCategoryById(id);
    //JSON.parse(returnAllCategoriesById);
    return res.status(200).send(category);
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
  