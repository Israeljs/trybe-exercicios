/*
------- INICIO DO ENUNCIADO --------
O quadrado da soma dos 10 primeiros números naturais é dado por:
(1 + 2 + ... + 10)^2 = 552 = 3025
A soma dos quadrados dos primeiros 10 números naturais é dada por:
1^2 + 2^2 + ... + 10^2 = 385
A diferença entre o quadrado da soma dos 10 primeiros números naturais
e a soma dos quadrados desses mesmos números é dada por 3025 - 385 = 2640

Dado um número natural N, construa um algoritmo capaz de calcular a diferença entre o quadrado da soma e a soma dos quadrados dos N primeiros números naturais.
------- FIM DO ENUNCIADO --------
Complete the 'sum_square_difference' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER n as parameter.
*/

const { strict: assert } = require('assert');

function sum_square_difference(n) {
};

// @TESTES
function test_hackerrank() {
  // Teste público
  assert.deepEqual(sum_square_difference(10),2640);
  // Teste fechado
  assert.deepEqual(sum_square_difference(100),25164150);
};
