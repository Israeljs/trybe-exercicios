// Dado um array de inteiros, retorna a soma dos valores únicos (que não se repentem) do array.
// Caso o array for vazio, retornar null

const firstArr = [1, 2, 3]; // 6
const secondArr = [8, 1, 1, 3, 1, 8]; // 3
const thirdArr = [-1, -1, 5, 2, -7]; // 0
const nullArr = []; // null
const uniqueSum = (arr) => {
    return arr.filter((element) => arr.filter((e) => e === element).length === 1)
        // .reduce((acc, curr) => acc + curr, null);
};

console.log(uniqueSum(secondArr))
[8, 1, 1, 3, 1, 8]
[8, 1, 1, 3, 1, 8]