const express = require('express');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const BusinessController = require('./controllers/BusinessController');
const SearchController = require('./controllers/SearchController');
const PesquisarController = require('./controllers/PesquisaController');
const ProjectController = require('./controllers/ProjectController');

routes.use(authMiddleware);

routes.get('/all', BusinessController.index);
routes.post('/login', BusinessController.login);
routes.post('/register', BusinessController.store);

routes.get('/view', SearchController.index);
routes.post('/new', SearchController.store);
routes.delete('/delete/:id', SearchController.destroy);

routes.get('/search', PesquisarController.index);

routes.get('/project', ProjectController.index);

module.exports = routes;