const categoryServices = require('../Services/CategoryServices');


function getCategorytohome(req,res,next)
{
    let data = categoryServices.getAllCategories();
    alert(data.length);
    res.render('Home.ejs',
    {
        y: data
    })

}

function goToSigninPage() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/users", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("user-list").innerHTML = this.responseText;
        }
    }
}


module.exports = {
  
getCategorytohome : getCategorytohome
   
}
  