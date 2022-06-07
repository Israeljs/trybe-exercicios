// Dado um array de inteiros, retorne um array removendo o menor valor. 
// Não faça mutação no array original.
// Se houverem vários valores iguais que correspondem ao valor mais baixo,
// remova o que tem a menor posição.
// Se você receber um array vazio, retorne um array vazio.
// Não altere a ordem dos elementos que serão retornados.

// [3, 2, 2, 1, 3, 4, 5]; => [3, 2, 2, 3, 4, 5]
// [3, 2, 1, 2, 1, 3, 4, 5]; => [3, 2, 2, 1, 3, 4, 5]
// []; => []


const removeSmallest = (numbers) => {
const smallestElement = Math.min(...numbers);
const indexElement  = numbers.indexOf(smallestElement);
const newNumbers = numbers.filter((_number, index) => {
  index === indexElement;
});

return newNumbers;
};

console.log(removeSmallest([3, 2, 1, 2, 1, 3, 4, 5]));