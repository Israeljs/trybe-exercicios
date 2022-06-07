/*
------- INICIO DO ENUNCIADO --------
Um número primo é um número natural que é divisível
exclusivamente por 1 e por ele mesmo.
Construa um algoritmo capaz de calcular o enésimo
número primo para um dado número N.
Por exemplo, para N = 6, tem-se os 6 primeiros números
primos (2, 3, 5, 7, 11, 13) onde 13 é o sexto número primo.
------- FIM DO ENUNCIADO --------
Complete the 'nth_prime' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER n as parameter.
*/

const { strict: assert } = require('assert');

const isPrime = (n) => {
// divide por todos os números antes de n;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrime(12))

function nth_prime(n) {
  const primos = [];

  for (let i = 2; primos.length < n; i++) {
    if (isPrime(i)) {
      primos.push(i);
    }
  }
  return primos[n -1]
};

console.log(nth_prime(6))

// @TESTES
function test_hackerrank() {
  // Teste público
  assert.deepEqual(nth_prime(6),13);
  // Teste fechado
  assert.deepEqual(nth_prime(1001),7927);
};
let text = "ABCDEFG"
const myArr = Array.from(text);
console.log(myArr)
console.log(text.split(''))
// [
//   'A', 'B', 'C',
//   'D', 'E', 'F',
//   'G'
// ]