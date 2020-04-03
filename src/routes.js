const express = require('express');

const routes = express.Router();

const BusinessController = require('./controllers/BusinessController');
const SearchController = require('./controllers/SearchController');

routes.get('/all', BusinessController.index);
routes.post('/login', BusinessController.login);
routes.post('/register', BusinessController.store);

routes.get('/view', SearchController.index);
routes.post('/new', SearchController.store);
routes.delete('/delete/:id', SearchController.destroy);

module.exports = routes;