const { response } = require('express');


/// token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDQwNjgwMmE1OWI4MDAyNDAwZWI1NSIsImlhdCI6MTU5ODI5MzYzMiwiZXhwIjoxNTk4MzgwMDMyfQ.i2tEDwXLs5pwygX3SXsckBqoUKHwlndqd1nt7MgJmsQ ccc ccc@
function signup(req,res,name,email,password)
{
  var inputName = req.params.name;
  var inputEmail = req.params.email;
  var inputPassword = req.params.password;
  console.log("hi" + name + " %" +email + "+" +password)
    var request = require('request');
    console.log("hataburda")
    var options = {
      'method': 'POST',
      'url': 'https://osf-digital-backend-academy.herokuapp.com/api/auth/signup',
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"secretKey":"$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC",name,email,password})
    
    };
    request(options, function (error, response) {
     
      if (error) throw new Error(error);
      console.log(response.body);

    });
    
}


function signin(req,res,email,password)
{
  
  console.log("hi"  + " %" +email + "+" +password)
  
    var request = require('request');
    var options = {
  'method': 'POST',
  'url': 'https://osf-digital-backend-academy.herokuapp.com/api/auth/signin',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"secretKey":"$2a$08$jKg/XbJqmQlVtqlYD8l.x.ZpUSvtQuYqrGT29KBRplVSH8w1dCFTC",email,password})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
  
});

}

module.exports = {

  signup : signup,
  signin : signin
}