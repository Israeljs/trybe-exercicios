const { Router } = require('express');
const bodyParser = require('body-parser');

const router = Router();

router
  .get('/ping', handlePong);
  // .post('/hello', handleHello)
  // .put('/users/:name/:age', handleNameAge);

function handlePong(req, res) {
  return res.status(200).json({ "message": 'pong' });
}

// function handleHello (req, res) {
//   const { name } = req.body;
//   return res.status(200).json({ "message": `Hello, ${name}!` })
// }

// function handleNameAge(req, res) {
//   const { name, age } = req.params;
//   return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
// }

module.exports = router;
