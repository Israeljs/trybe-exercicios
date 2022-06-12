const express = require('express');
const middlewares = require('./middlewares');
const app = express();
const people = require('./routes/people')


app.use(express.json());

app.use('/people', people)

app.use(middlewares.errorHander);

app.listen(8001, ()=> {
  console.log('Rodanddo na porta 8001')
})
