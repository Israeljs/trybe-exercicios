const express = require('express');
require('express-async-errors');
const movieRoute = require('./routes/movieRoute');
const characterRoute = require('./routes/characterRoute');

const APP_PORT = Number(process.env.APP_PORT || 3000);

const app = express();
app.use(express.json());

app.use('/movies', movieRoute);
app.use('/characters', characterRoute);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError': res.status(400).json({ message }); break;
    case 'NotFoundError': res.status(404).json({ message }); break;
    default: console.warn(err); res.sendStatus(500);
  }
});

app.listen(APP_PORT, () => console.log(`running on port ${APP_PORT}`));