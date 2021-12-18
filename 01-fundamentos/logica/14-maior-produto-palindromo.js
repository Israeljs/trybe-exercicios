/*
------- INICIO DO ENUNCIADO --------
Um número palíndromo tem o mesmo valor sendo ser lido da direita para a
esquerda ou da esquerda para direita, por exemplo: 11, 212, 3773, 1034301...
O maior número palíndromo resultado do produto de dois números de 2 dígitos
é 9009 (91 x 99)
Encontre o  maior número palíndromo resultado do produto de dois números
com um determinado número de dígitos.
------- FIM DO ENUNCIADO --------
*/

const { strict: assert } = require('assert');

function largest_palindrome_product(digits) {

};

// @TESTES
function test_hackerrank() {
    // Teste público
    assert.deepEqual(largest_palindrome_product(2),9009);
    // Teste fechado
    assert.deepEqual(largest_palindrome_product(3),906609);
};
