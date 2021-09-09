const assert = require('assert');

const quote = ['So','long', 'and', 'thanks', 'for', 'all', 'the', 'fish'];

const expected = 'So long and thanks for all the fish';

const actual = quote.reduce((accumulator, word, index) => {
  console.log(`elemento[${index}] || word: ${word} || accumulator: ${accumulator}`)
  return `${accumulator} ${word}`;
});

// console.log(quote.join(' '));

console.log(actual)

assert.strictEqual(actual, expected);