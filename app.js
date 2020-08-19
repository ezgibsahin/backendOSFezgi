const express = require('express');
const app = express();
var path = require('path');
require('./Routes')(app);

var port = 3000;

app.listen(port, () =>{
    console.log(`Our app is running on port ${port}`);
});

//EJS
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');


module.exports = app;