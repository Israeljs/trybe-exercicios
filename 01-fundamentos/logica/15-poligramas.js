/*
------- INICIO DO ENUNCIADO --------
Duas palavras A e B são anagramas entre si se podemos transformar a palavra
A na palavra B apenas trocando de posição as letras da palavra A.
Por exemplo, "duetos" e "estudo" são anagramas entre si. Um outro exemplo é
"bba" e "bab".

Vamos chamar de poligrama uma palavra que consiste na concatenação de duas
ou mais palavras que são anagramas entre si.

A primeira dessas palavras é chamada de raiz do poligrama.

Por exemplo, a palavra "bbabab" é um poligrama com raiz "bba", pois ela é a
concatenação dos anagramas "bba" e "bab".

Dada uma palavra, escreva um programa que determine se ela é um poligrama.

Caso a palavra seja um poligrama o programa deve retornar a raiz desse
poligrama.

Caso contrário deve retornar uma string vazia.
------- FIM DO ENUNCIADO --------
Complete the 'poligrama' function below.
The function is expected to return a STRING.
The function accepts STRING word as parameter.
*/

const { strict: assert } = require('assert');

function poligrama(word) {
  
};

// @TESTES
function test_hackerrank() {
  // Testes públicos
  assert.deepEqual(poligrama('bbabab'),'bba');
  assert.deepEqual(poligrama('bbabb'),'');
  assert.deepEqual(poligrama('palavra'),'');
  assert.deepEqual(poligrama('bbbbaaaa'),'');
  // Testes fechados
  assert.deepEqual(poligrama('aaaabbbb'),'');
  assert.deepEqual(poligrama('aabaaaaaba'),'aabaa');
};
