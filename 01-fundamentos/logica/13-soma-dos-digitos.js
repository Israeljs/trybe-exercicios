/*
------- INICIO DO ENUNCIADO --------
Escreva um programa capaz de encontrar quantos números entre 0 e 1000 têm a
soma dos seus dígitos igual a um dado número S.
Por exemplo, para S = 26 temos 3 números, 899, 989 e 998, cujas somas dos
algarismos é igual a S.
------- FIM DO ENUNCIADO --------
Complete the 'digits_sum' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER number_s as parameter.
*/

const { strict: assert } = require('assert');

function digits_sum(number_s) {
};

// @TESTES
function test_hackerrank() {
    // Teste público
    assert.deepEqual(digits_sum(26),3);
    // Teste fechado
    assert.deepEqual(digits_sum(23),15);
};
