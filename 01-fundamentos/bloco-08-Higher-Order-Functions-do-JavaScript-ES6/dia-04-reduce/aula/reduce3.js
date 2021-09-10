const assert = require('assert');

const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

const expected = {
  'Adriano Imperador': 'didico@futebol.br',
  'Ronaldinho Gaúcho': 'bruxo@futebol.br',
  'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
  'Túlio Maravilha': 'deputado@futebol.br',
}


const playersObject = players.reduce((accumulator, player) => {
  accumulator[player.fullName] = player.email;

  return accumulator ;
}, {});

console.log(playersObject)

// assert.deepStrictEqual(playersObject, expected);