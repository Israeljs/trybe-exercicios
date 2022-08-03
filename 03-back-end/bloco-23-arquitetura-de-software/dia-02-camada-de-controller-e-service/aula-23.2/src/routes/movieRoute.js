const { Router } = require('express');
const movieController = require('../controllers/movieController');

const movieRoute = Router();

movieRoute.get('/', movieController.listMovies);
movieRoute.get('/:id', movieController.getMovie);
movieRoute.post('/', movieController.addMovie);
movieRoute.put('/:id', movieController.editMovie);
movieRoute.delete('/:id', movieController.removeMovie);

module.exports = movieRoute;