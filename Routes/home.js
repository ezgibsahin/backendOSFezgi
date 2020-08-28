const express = require('express');
const routes = express.Router();
const homeController = require('../Controller/HomeController');


routes.get('/',homeController.searchForProducts);



module.exports = routes;