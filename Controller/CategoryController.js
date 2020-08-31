const categoryServices = require('../Services/CategoryServices');

//Function the return all categories from Category Service
async function getAllCategories(req, res, next) {
    const returnAllCategories = await categoryServices.getAllCategories(req,res);
    return returnAllCategories;
}


//Function the return categories by id from Category Service
async function getCategoryById(req, res, next,id) {
    const mainCat = await categoryServices.getCategoryById(req,res);
    
    return mainCat;
   
}

//Function the return categories by parent id from Category Service
async function getCategoriesByParentId(req, res, next,id) {
    const mainCat = await categoryServices.getCategoryByParentId(req,res);
    return mainCat;
}

module.exports = {
    getCategoryById :getCategoryById,
    getAllCategories: getAllCategories,
    getCategoriesByParentId: getCategoriesByParentId
 
}