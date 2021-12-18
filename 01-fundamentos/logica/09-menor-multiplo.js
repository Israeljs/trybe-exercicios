/*
------- INICIO DO ENUNCIADO --------
O menor número divisível por todos os números de 1 a 10 é 2520.
Crie um algoritmo capaz de calcular o menor número divisível por todos os
números de 1 a um dado número.
------- FIM DO ENUNCIADO --------
Complete the 'smallest_multiple' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER roof as parameter.
*/

const { strict: assert } = require('assert');

function smallest_multiple(roof) {
};

// @TESTES
function test_hackerrank() {
  // Teste público
  assert.deepEqual(smallest_multiple(10),2520);
  // Teste fechado
  assert.deepEqual(smallest_multiple(12),27720);
};
