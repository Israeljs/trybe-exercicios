// Una os dois arrays de duas formas diferentes! Com loops e com spread operators!

const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

// const awesomeBooks = [];

// horrorBooks.forEach(book => awesomeBooks.push(book));
// scifiBooks.forEach(book => awesomeBooks.push(book));

const awesomeBooks = [...horrorBooks, ...scifiBooks];

assert.deepStrictEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
); 