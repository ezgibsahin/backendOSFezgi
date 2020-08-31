const express = require('express');
const app = express();
var path = require('path');
require('./Routes')(app);
const bodyParser = require('body-parser');
const Sentry = require('@sentry/node');
var port = process.env.PORT || 5000;
// or use es6 import statements
// import * as Sentry from '@sentry/node';

Sentry.init({ dsn: 'https://4c571433a50949398fdfd52bbf0cf454@o436854.ingest.sentry.io/5398567 (https://4c571433a50949398fdfd52bbf0cf454@o436854.ingest.sentry.io/5398567)' });


app.listen(port, () =>{
    console.log('Our app is running on port ${port}');
});

//EJS
app.set('views', './Views'); 
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.use(express.json()); 
app.use(express.urlencoded({extended: false }))
module.exports = app;