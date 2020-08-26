const categoryServices = require('../Services/CategoryServices');


async function getAllCategories(req, res, next) {
   
    const returnAllCategories = await categoryServices.getAllCategories(req,res);
    return returnAllCategories;
}

async function getCategoryById(req, res, next,id) {
   
    const mainCat = await categoryServices.getCategoryById(req,res);
    return mainCat;
}

async function getCategoriesByParentId(req, res, next,id) {
   
    const mainCat = await categoryServices.getCategoryByParentId(req,res);
    return mainCat;
}

module.exports = {
    getCategoryById :getCategoryById,
    getAllCategories: getAllCategories,
    getCategoriesByParentId: getCategoriesByParentId
 
}