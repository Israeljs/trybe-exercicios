const express = require('express');
const app = express();
const port = 3030;

const Author = require('./model/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).send(authors);
})

app.listen(port, () => console.log(`listening on port ${port}`));
