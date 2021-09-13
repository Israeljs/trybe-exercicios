const assert = require("assert");

function greeting(name = 'Anônimo'){
  return `Olá, ${name}!`
}

assert.strictEqual(greeting('Isaac'), 'Olá, Isaac!');
assert.strictEqual(greeting(), 'Olá, Anônimo!');