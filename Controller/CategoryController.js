const categoryServices = require('../Services/CategoryServices');


async function getCategorieById(req,res,next,id)
{
    const returnCategoriesById = await categoryServices.getCategoryById(req,res,next,id);
    return returnCategoriesById;
}

async function getAllCategories(req, res, next) {
   
    const returnAllCategories = await categoryServices.getAllCategories(req,res);
    return returnAllCategories;
}

async function getMainCats(req, res, next,id) {
   
    const mainCat = await categoryServices.getmains(req,res);
    return mainCat;
}

async function getCategoriesByParentId(req, res, next,id) {
   
    const mainCat = await categoryServices.getCategoryById(req,res);
    return mainCat;
}



module.exports = {
    getMainCats :getMainCats,
    getAllCategories: getAllCategories,
    getCategorieById: getCategorieById,
    getCategoriesByParentId: getCategoriesByParentId
 
}