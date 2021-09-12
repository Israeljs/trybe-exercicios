// A função soma todos os valores de um array:
// Apenas com o for :
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// Com .reduce :
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15


// com o paramétro depois da função
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

// Agora mude o 0 para 10 ou qualquer outro valor.
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
function pares() {
  return numbers.reduce((acc, number) => ((number % 2 === 0) ? acc + number : acc), 0);
}
console.log(pares());


// MAP e REDUCE diferença 
const adultos = [
  {
    peso: 100,
    altura: 1.85
  },
  {
    peso: 90,
    altura: 1.72
  },
  {
    peso: 79,
    altura: 1.99
  }
]

// IMC = Índice de Massa Corporal

function IMC(adulto) {
  return parseFloat((adulto.peso/(Math.pow(adulto.altura,2))).toFixed(2))
}

console.log(adultos.map(IMC)) // [ 29.22, 30.42, 19.95 ]
console.log(adultos.reduce()) // NaN

