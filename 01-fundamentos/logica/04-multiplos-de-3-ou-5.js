/*
------- INICIO DO ENUNCIADO --------
Construa um algoritmo que encontre a soma de todos os
números naturais múltiplos de 3 ou 5 menores que um dado número.
Por exemplo, quando listamos todos os números naturais menores que
10 que são múltiplos de 3 ou 5, temos: 3, 5, 6 e 9.

A soma desses números é 3 + 5 + 6 + 9 = 23
------- FIM DO ENUNCIADO --------
Complete the 'multiples_of_3_or_5' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER roof as parameter.
*/

const { strict: assert } = require('assert');

function multiples_of_3_or_5(roof) {
};

// @TESTES
function test_hackerrank() {
  // Teste público
  assert.deepEqual(multiples_of_3_or_5(10),23);
  // Teste fechado
  assert.deepEqual(multiples_of_3_or_5(1200),335400);
};
