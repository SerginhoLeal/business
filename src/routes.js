const express = require('express');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const BusinessController = require('./controllers/BusinessController');
const SearchController = require('./controllers/SearchController');
const PesquisarController = require('./controllers/PesquisaController');
const ProjectController = require('./controllers/ProjectController');


routes.post('/PwbsOs9YtfLi85clN8Sz', BusinessController.login);
routes.post('/NRBQlog6f2Pwnqe3adQJ', BusinessController.store);

routes.get('/8dr7YKjlJ3aXKcnwGJrm', SearchController.index);
routes.post('/C7Ypo2iFU0OTT7RrH1TR', SearchController.store);
routes.delete('/tuo5NSqTcZ7fXUKBMtGh/:id', SearchController.destroy);

routes.get('/kW24SJmbA6surYp5qWPJ', PesquisarController.index);

routes.use(authMiddleware);

routes.get('/project', ProjectController.index);

module.exports = routes;