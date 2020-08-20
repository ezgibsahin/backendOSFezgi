const categoryServices = require('../Services/CategoryServices');

function categoryPage(req, res, next){
    const returnFromService = categoryServices.categoryPage();
    return res.status(200).send(returnFromService);
}

function getAllCategories(req,res,next)
{
    let returnAllCategories =  categoryServices.getAllCategories();
    return res.status(200).send(returnAllCategories);
}
async function getCategoryById(id)
{
    let allCategories = await getAllCategories();
    let parsedCategories = JSON.parse(allCategories);
    let chosenCategory;
    for(var i = 0; i < parsedCategories.length; i++) 
    {
        var obj = parsedCategories[i];
        if (obj.id === id)
        {
            chosenCategory = obj;
            break;
        }
    }
    let front = categoryServices.getCategoryById(chosenCategory.id);
    res.render('Categories.ejs',
    {
        choice : front
    })
        //console.log(parsedCategories);
       
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
  