const express = require('express');
const Router = express.Router();

//require('./models');

/** CONTROLLERS */
const ContactController = require('./controllers/ContactController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

//Middlewares
const authMiddleware = require('./middlewares/auth');

/** ROUTES */
Router.post('/contact', ContactController.store);
Router.post('/users', UserController.store);
Router.post('/sessions', SessionController.store);

Router.use(authMiddleware);

Router.put('/users', UserController.update);

module.exports = Router;
