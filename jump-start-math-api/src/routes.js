const express = require('express');
const Router = express.Router();

require('./models');

/** CONTROLLERS */
const ContactController = require('./controllers/ContactController');

/** ROUTES */
Router.post('/contact', ContactController.store);

module.exports = Router;
