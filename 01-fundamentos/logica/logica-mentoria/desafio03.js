// Dada uma string com uma frase, retorne uma nova frase invertendo todas as
// palavras que tenham cinco ou mais letras.
// Não altere a string original.
/* 
  'Trybe'; => ebyrT
  'Olá queridos amigos'; => Olá sodireuq sogima
  'Isso é um gato'; => Isso é um gato
  'Você está quase no último teste'; => Você está esauq no omitlú etset
  'A base do teto desaba'; => A base do teto abased
 */
const spinWords = (string) => {
  return string.split(' ').map((element) => {
    if (element.length >= 5) {
      return element.split('').reverse().join('');
    }
    return element;
  }).join(' ');
};

console.log(spinWords('Olá queridos amigos'))
module.exports = spinWords