const express = require('express')
const routes = express.Router();
const authenticationController = require('../Controller/AuthenticationController');



routes.post('/signin',authenticationController.signin);

routes.post('/signup',authenticationController.signup);


module.exports = routes;