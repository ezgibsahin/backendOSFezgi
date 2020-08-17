const fs = require('fs');
function categoryPage() {
    return "Hello this is category page!!!";
}


function save(data)
{
    return new Promise((resolve,reject) =>
    {
        fs.writeFile('categories.json',JSON.stringify(data,null,10),(err) =>{
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve();
            }
        });
    });
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
        save(response.body);
        console.log(response.body);
    });
   
}

async function getAllCategoriesById(id)
{
    return new Promise((resolve, reject) => {
        fs.readFile('categories.json', 'utf8', (err, data) => {
          if (err) 
          {
            reject(err);
          } 
          else 
          {
            const json = JSON.parse(data);
            resolve(json);
          }
        });
      });

      var request = require('request');
      var options = {
          'method': 'GET',
          'url': 'https://osf-digital-backend-academy.herokuapp.com/api/categories?secretKey=$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC',
          'headers': {
          }
      };
      const categories = await getAllCategories();
       category.categories.find(category => category.id == id);
}

module.exports = {
    categoryPage: categoryPage,
    getAllCategories: getAllCategories,
    getAllCategoriesById: getAllCategoriesById
}
  