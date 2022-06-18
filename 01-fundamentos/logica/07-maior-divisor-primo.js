/*
------- INICIO DO ENUNCIADO --------
Números primos são aqueles que são divisíveis exclusivamente
por 1 e por eles mesmos. Ex: 2, 3, 5, 7, 11, 13, 17, 19.
Os divisores primos de 13195, por exemplo, são 5, 7, 13 e 29.
Encontre o maior divisor primo de um dado número.
------- FIM DO ENUNCIADO --------
Complete the 'largest_prime_factor' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER number as parameter.
*/

const { strict: assert } = require('assert');

const isDivision = (dividendo, divisor)=> dividendo % divisor === 0;

function isPrime(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (isDivision(number, i)) {
      count += 1;
    }
  }
  if (count === 2) {
    return true;
  } else {

    return false;
  }
}

console.log(isPrime(7))

function largest_prime_factor(number) {
  let lagestPrime = 0;

  for (let i = 0; i < number; i++) {
    if (isPrime(i) && isDivision(number, i)) {
      lagestPrime = i;
    }
  }
  return lagestPrime;
};

console.log(largest_prime_factor(13195))

// @TESTES
// function test_hackerrank() {
//   // Teste público
//   assert.deepEqual(largest_prime_factor(13195),29);
//   // Teste fechado
//   assert.deepEqual(largest_prime_factor(1460541),6857);
// }

// const t = {
//   column: 'population',
//   comparison: 'maior que',
//   value: 0,
// }

// const t2 = { ...t, column: 'ppppp'}

// console.log(t2)
