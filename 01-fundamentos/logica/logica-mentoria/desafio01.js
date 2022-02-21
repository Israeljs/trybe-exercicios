// Dado um array de inteiros, retorna a soma dos valores do 
// array desconsiderando as repetições.
// Caso o array for vazio, retornar null

const firstArr = [1, 2, 3]; // 6
const secondArr = [8, 1, 1, 3, 1, 8]; // 12
const thirdArr = [-1, -1, 5, 2, -7]; // -1
const nullArr = []; // null

// const uniqueSum = (arr) => {
//   let sum = [];
//   if (arr.length === 0) {
//     return null;
//   } else {
//     sum = [...new Set(arr)] // elimina repetições no array
//   }
//   const result = sum.reduce((acc, i) => {
//     return acc + i
//   }, 0);
//   return result;
// };

const uniqueSum = (arr) => {
  return arr.filter((element, index) => arr.indexOf(element) === index) // mostra a primeira posição onde o elemento foiencontrado
      .reduce((acc, curr) => acc + curr, null); // para arrays vazios o null já está setado no reduce
};

console.log(uniqueSum(nullArr))
