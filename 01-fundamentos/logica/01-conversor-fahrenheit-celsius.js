const { strict: assert } = require('assert');
/*
------- INICIO DO ENUNCIADO --------
 Para se converter uma temperatura medida em um termômetro em Fahrenheits
 para a escala Celsius,
 com a qual estamos mais acostumados no Brasil deve-se usar a equação:
 C = (F-32)/(1,8), onde C é a temperatura em graus Celsius e F a temperatura
 medida em Fahrenheits.
 Construa um algoritmo que, ao receber um valor de temperatura medido em
 Fahrenheits retorne a medida equivalente em Celsius.

 Por exemplo, ao receber a leitura de 95oF retorne:
 C = (95-32)/(1,8) = 35oC

 * Atenção para a saída em um número de ponto flutuante
 ------- FIM DO ENUNCIADO --------

 Complete the 'fahrenheit_to_celsius' function below.

 The function is expected to return a FLOAT.
 The function accepts INTEGER temp_fahrenheit as parameter.
*/

function fahrenheit_to_celsius(temp_fahrenheit) {
  return ((temp_fahrenheit - 32) / 1.8).toFixed(1);
};

// @TESTES
function test_hackerrank() {
  // Teste público
  assert.deepEqual(fahrenheit_to_celsius(95),'35.0');
  // Teste fechado
  assert.deepEqual(fahrenheit_to_celsius(23),'-5.0');
};
