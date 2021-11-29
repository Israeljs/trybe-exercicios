/*
------- INICIO DO ENUNCIADO --------
Dado um número X construa um programa que retorne a contagem
regressiva no formato X...X-1...X-2...0!!!
Por exemplo, se X = 10, retorne:
10...9...8...7...6...5...4...3...2...1...0!!!
------- FIM DO ENUNCIADO --------
Complete the 'count_down' function below.
The function is expected to return a STRING.
The function accepts INTEGER x as parameter.
*/

const { strict: assert } = require('assert');

function count_down(x) {
};

// @TESTES
function test_hackerrank() {
  // Teste público
  assert.deepEqual(count_down(10),'10...9...8...7...6...5...4...3...2...1...0!!!');
  // Teste fechado
  assert.deepEqual(count_down(12),'12...11...10...9...8...7...6...5...4...3...2...1...0!!!');
};
