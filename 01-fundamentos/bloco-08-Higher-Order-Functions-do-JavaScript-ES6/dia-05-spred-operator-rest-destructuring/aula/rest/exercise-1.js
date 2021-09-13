// Crie uma função que some todos os N parâmetros passados a ela.

const assert = require('assert');

function sumAll(...values){
  const result = values.reduce((accumulator, value) => accumulator + value, 0);

  return result;
}


assert.strictEqual(sumAll(), 0);
assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);