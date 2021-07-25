const express = require('express');
const Router = express.Router();

//require('./models');

/* CONTROLLERS */
const ContactController = require('./controllers/ContactController');
const ClassroomController = require('./controllers/ClassroomController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

/* MIDDLEWARES */
const authMiddleware = require('./middlewares/auth');

/* CONTACT */
Router.post('/contact', ContactController.store);
Router.post('/users', UserController.store);
Router.post('/sessions', SessionController.store);

Router.use(authMiddleware);

/* USER */
Router.put('/users', UserController.update);

/* CLASSROOM */
Router.get('/classroom', ClassroomController.index);
Router.post('/classroom', ClassroomController.store);
Router.put('/classroom/:code', ClassroomController.archive);

module.exports = Router;
