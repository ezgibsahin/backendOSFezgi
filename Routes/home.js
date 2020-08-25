const express = require('express');
const routes = express.Router();
const homeController = require('../Controller/HomeController');


routes.get('/',homeController.getCAtegorytoHome);



module.exports = routes;
