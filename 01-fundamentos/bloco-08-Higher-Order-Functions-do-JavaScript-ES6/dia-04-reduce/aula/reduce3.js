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

// function countEntrants(entrants) {
//   const child = entrants.filter(({ age }) => age < 18).length;
//   const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
//   const senior = entrants.filter(({ age }) => age >= 50).length;
//   const obj = { child, adult, senior };
//   return obj;
// }
// console.log(countEntrants(entrants));

// const { prices } = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];
