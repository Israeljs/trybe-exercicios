const { Router } = require('express');
const characterController = require('../controllers/characterController');

const characterRoute = Router();

characterRoute.delete('/:id', characterController.removeCharacter);
characterRoute.put('/:id', characterController.editCharacter);
characterRoute.get('/:id', characterController.getCharacter);
characterRoute.get('/', characterController.listCharacters);
characterRoute.post('/', characterController.addCharacter);

module.exports = characterRoute;