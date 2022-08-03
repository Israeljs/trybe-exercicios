/*
------- INICIO DO ENUNCIADO --------
Um atendente de supermercado deve lançar os valores dos produtos
à medida que os passa no caixa.

Eventualmente ele faz um lançamento errado e para invalidá-lo deve lançar o
valor0 (zero) para que o registro anterior não seja considerado.
Na eventualidade de mais de um valor ser lançado errado consecutivamente o
atendente lançará tantos valores zero quanto necessários para apagar os
registros incorretos.
Por exemplo, no lançamento: 1, 3, 5, 4, 0, 0, 7, 0, 0, 6 serão considerados
para a soma os valores 1, 6, visto que os valores 3, 5, 4 e 7 foram
anulados pelos 0.
Construa um algoritmo capaz de processar uma entrada de n números e
apresentar na saída a SOMA DOS REGISTROS VÁLIDOS.
Considere a entrada do algoritmo sendo uma lista da seguinte forma
[n1, n2, n3, n4,... nX].
No exemplo acima a entrada seria [1, 3, 5, 4, 0, 0, 7, 0, 0, 6]
------- FIM DO ENUNCIADO --------
Complete the 'caixa' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER_ARRAY values as parameter.
*/

const {
    strict: assert
} = require('assert');

function caixa(values) {
    const newArray = [];
    values.forEach((element) => {
        if (element === 0) {
            newArray.pop();
        } else {
            newArray.push(element);
        }
    });
    return newArray.reduce((acc, element) =>acc + element);
};

console.log(caixa([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]));

// // @TESTES
// function test_hackerrank() {
//     // Teste público
//     assert.deepEqual(caixa([1, 3, 5, 4, 0, 0, 7, 0, 0, 6]),7);
//     // Teste fechado
//     assert.deepEqual(caixa([1, 3, 5, 8, 9, 3, 7, 7, 9, 6, 1, 3, 5, 0, 0, 0, 7, 0, 0, 6, 0, 3, 5, 4, 0, 0, 7, 0, 0, 6, 1, 3, 5, 0, 0, 0, 7, 0, 0, 6, 0, 3, 5, 4, 0, 0, 7, 0, 0, 6, 1, 3, 5, 4, 0, 0, 0, 0, 0, 6, 1, 3, 5, 4, 0, 0, 7, 0, 0, 6, 1, 3, 5, 4, 0, 0, 0, 0, 0, 6, 0, 3, 5, 0, 0, 0, 7, 0, 0, 6, 1, 0, 5, 4, 0, 0, 0, 0, 0, 6]),42);
// };