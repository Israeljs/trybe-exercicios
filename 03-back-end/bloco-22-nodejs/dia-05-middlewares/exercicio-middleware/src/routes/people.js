const express = require('express');
const peopleControllers= require('../controllers/peopleControllers');
const router = express.Router();
// const middlewares = require('../middlewares');

//const productsValidator = [
//  middlewares.nameValidate,
//  middlewares.quantityValidate,
//];

router.get('/', peopleControllers.getAll);
router.get('/:id', peopleControllers.getById);
//router.post('/', peopleValidator, peopleControllers.create);
//router.put('/:id', peopleValidator, peopleControllers.update);
//router.delete('/:id', peopleControllers.exclude);

module.exports = router;
