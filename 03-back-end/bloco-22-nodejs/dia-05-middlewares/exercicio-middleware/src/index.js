const express = require('express');
const app = express();
const middlewares = require('./middlewares');


app.use(express.json());

app.use(middlewares.errorHander);

app.listen(8001, ()=> {
  console.log('Rodanddo na porta 8001')
})
