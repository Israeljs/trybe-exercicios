const { strict: assert } = require('assert');
/*
------- INICIO DO ENUNCIADO --------
Dado um número X, retorne a diferença entre X e 10 de forma que o
resultado seja sempre um valor positivo.
Isto é:
- se X < 10, faça 10 - X, por exemplo, se X = 3, retorne 7 (10 - 3)
- se X > 10, faça X - 10, por exemplo, se X = 15, retorne 5 (15 - 10)
------- FIM DO ENUNCIADO --------
Complete the 'difference' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER x as parameter.
*/

// function difference(x) {
//   let diff = 0;
//   if (x < 10) {
//     diff = 10 - x;
//   } else {
//     diff = x - 10;
//   }
//   return diff;
//   return Math.abs(x - 10); // sempre dará um número positivo
// }

// outra forma de fazer
function difference(x) {
  return Math.abs(x - 10); // sempre dará um número positivo
}

// @TESTES
function test_hackerrank() {
  // Teste público
  assert.deepEqual(difference(3),7);
  // Testes fechados
  assert.deepEqual(difference(1),9);
  assert.deepEqual(difference(20),10);
  assert.deepEqual(difference(10),0);
};

test_hackerrank();
