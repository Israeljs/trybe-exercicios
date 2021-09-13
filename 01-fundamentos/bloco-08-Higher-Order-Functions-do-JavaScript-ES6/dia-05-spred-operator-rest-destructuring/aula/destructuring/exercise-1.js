// Extraia as informações de name e birthplace do objeto para montar uma frase!

const assert = require('assert');

const singer = {
  name: 'Milton Nascimento',
  birthplace: 'Rio de Janeiro',
  city: 'Belo Horizonte',
  albuns: ['Minas', 'Geraes', 'Clube da Esquina', 'Canção da America', 'Três Pontas', 'Nascimento', 'Caçador de Mim']
}

const birthplace = 'Natal';

const { birthplace: place, name,  city, albuns, hits = [] } = singer;

// const name = singer.name;
// const birthplace = singer.birthplace;
// const city = singer.city;
// const albuns = singer.albuns;

// console.log(hits)
const [ firstAlbum, secondAlbum, _, fourthAlbum, ...otherAlbuns ] = albuns

console.log(otherAlbuns);

const phrase = `O cantor ${name} nasceu no ${place} e mora em ${city}. Ele possui ${albuns.length} albuns.`;

assert.strictEqual(
  phrase,
  'O cantor Milton Nascimento nasceu no Rio de Janeiro e mora em Belo Horizonte. Ele possui 7 albuns.'
); 