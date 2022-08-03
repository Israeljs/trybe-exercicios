const { Router } = require('express');
const movieController = require('../controllers/movieController');

const movieRoute = Router();

movieRoute.delete('/:id', movieController.removeMovie);
movieRoute.put('/:id', movieController.editMovie);
movieRoute.get('/:id', movieController.getMovie);
movieRoute.get('/', movieController.listMovies);
movieRoute.post('/', movieController.addMovie);

module.exports = movieRoute;