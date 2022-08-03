const { Router } = require('express');
const directorController = require('../controllers/directorController');

const directorRouter = Router();

directorRouter.post('/', directorController.createDirector);
directorRouter.put('/:id', directorController.updateDirector);

module.exports = directorRouter;