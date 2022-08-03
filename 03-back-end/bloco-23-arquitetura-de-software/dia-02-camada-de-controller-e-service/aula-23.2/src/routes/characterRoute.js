const { Router } = require('express');
const characterController = require('../controllers/characterController');

const characterRoute = Router();

characterRoute.get('/', characterController.listCharacters);
characterRoute.get('/:id', characterController.getCharacter);
characterRoute.post('/', characterController.addCharacter);
characterRoute.put('/:id', characterController.editCharacter);
characterRoute.delete('/:id', characterController.removeCharacter);

module.exports = characterRoute;