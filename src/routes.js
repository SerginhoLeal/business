const express = require('express');

const routes = express.Router();

const BusinessController = require('./controllers/BusinessController');
const SearchController = require('./controllers/SearchController');
const PesquisarController = require('./controllers/PesquisaController');

routes.get('/all', BusinessController.index);
routes.post('/login', BusinessController.login);
routes.post('/register', BusinessController.store);

routes.get('/view', SearchController.index);
routes.post('/new', SearchController.store);
routes.delete('/delete/:id', SearchController.destroy);

routes.get('/search', PesquisarController.index);

module.exports = routes;