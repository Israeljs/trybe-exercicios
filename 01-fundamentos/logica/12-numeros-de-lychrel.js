/*
------- INICIO DO ENUNCIADO --------
Números palíndromos podem ser lidos da esquerda para direita ou da direita
para esquerda com o mesmo resultado.
Se pegarmos o número 47 e o somarmos ao seu reverso, 74, temos 47 + 74 = 121,
que é um número palíndromo.
Nem todos os números geram palíndromos de forma tão rápida quanto 47.
Por exemplo 349
  349 + 943 = 1292
  1292 + 2921 = 4213
  4213 + 3124 = 7337 (palíndromo)
Ou seja, 349 leva 3 iterações para gerar um palíndromo pelas somas dos
resultados com seu reverso.

Apesar de não ser formalmente provado, acredita-se que números como 196
jamais gerarão um palíndromo pela somas dos resultados de seus resultados
com os respectivos reversos.
Um número que não gera palíndromos a partir desse processo é chamado de
Número de Lychrel.
Acredita-se que para qualquer número abaixo de 10.000
- gerará um palíndromo a partir da soma dos resultados com seus reversos até
  a 50a iteração
- não será possível gerar um palíndromo nem mesmo com todo o poder
  computacional disponível no mundo
Construa um algoritmo capaz de identificar a quantidade de números de
Lychrel menores que um dado número N < 10.000
------- FIM DO ENUNCIADO --------
*/

const { strict: assert } = require('assert');

function isLychrel(n) {
  let number = n;
  for (let index = 0; index < 50; index++) {
    const reverse = Number(number.toString().split('').reverse().join(''));
    const sum = reverse + number;

    const reverseSum = sum.toString().split('').reverse().join('');
    if (sum == reverseSum) {
      return false
    }
    number = sum;
  }
  return true;
}

function lychrel_numbers(n) {
  let totalLychrel = 0;
  for (let i = n; i > 0; i--) {
    if (isLychrel(i)) {
      totalLychrel++;
    }
  }
  return totalLychrel;
};

// @TESTES
function test_hackerrank() {
    // Teste público
    assert.deepEqual(lychrel_numbers(200),1);
    // Teste fechado
    assert.deepEqual(lychrel_numbers(10000),249);
};
