const express = require('express');
const Router = express.Router();

require('./models');

/* CONTROLLERS */
const ContactController = require('./controllers/ContactController');
const ClassroomController = require('./controllers/ClassroomController');

/* CONTACT */
Router.post('/contact', ContactController.store);

/* CLASSROOM */
Router.get('/classroom', ClassroomController.index);
Router.post('/classroom', ClassroomController.store);
Router.put('/classroom/:code', ClassroomController.archive);

module.exports = Router;
