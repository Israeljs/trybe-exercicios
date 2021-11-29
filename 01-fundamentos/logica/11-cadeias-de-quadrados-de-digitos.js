/*
------- INICIO DO ENUNCIADO --------
Uma cadeia de números é gerada a partir da soma dos quadrados dos dígitos
do número anterior até que o número formado já esteja presente nessa cadeia.
Por exemplo:
* 44 - 32 - 13 - 10 - 1 - 1 (4^2 + 4^2 = 32 | 3^2 + 2^2 = 13 | 1^2 + 3^2 = 10
  | 1^2 + 0^2 = 1 | 1^2 = 1
* 85 - 89 - 145 - 42 - 20 - 4 - 16 - 37 - 58 - 89
Qualquer cadeia que chegue a um número repetido ficará presa em um looping
infinito entre a primeira ocorrência desse número e a segunda ocorrência
dele.
No caso do 1, a partir da primeira ocorrência, todos os números serão 1.
Já no caso do 89, uma vez que ele seja atingido, a sequência será
eternamente: 89 - 145 - 42 - 20 - 4 - 16 - 37 - 58 - 89
O que é mais incrível é que para qualquer número inteiro que se inicie essa
cadeia ela chegará a 1 ou 89.
Construa um algoritmo capaz de contar quantas cadeias terminarão em 89
considerando cadeias que se iniciem com todos os números menores que um
dado número N.
------- FIM DO ENUNCIADO --------
Complete the 'square_digit_chains' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER n as parameter.
*/

const { strict: assert } = require('assert');

function square_digit_chains(n) {
};

// @TESTES
function test_hackerrank() {
    // Teste público
    assert.deepEqual(square_digit_chains(100),80);
    // Teste fechado
    assert.deepEqual(square_digit_chains(10000),8558);
};
