# Desafios de Lógica

## Desafio 01 - Conversor Fahrenheit-Celsius

Para se converter uma temperatura medida em um termômetro em Fahrenheits para a escala Celsius, com a qual estamos mais acostumados no Brasil deve-se usar a equação: C = (F-32)/(1,8), onde C é a temperatura em graus Celsius e F a temperatura medida em Fahrenheits. 

Construa um algoritmo que, ao receber um valor de temperatura medido em Fahrenheits retorne a medida equivalente em Celsius. Por exemplo, ao receber a leitura de 95oF retorne: C = (95-32)/(1,8) = 35oC 
    
***Atenção para a saída em um número de ponto flutuante***

> Complete the 'fahrenheit_to_celsius' function below.
>
> The function is expected to return a FLOAT.
>
> The function accepts INTEGER temp_fahrenheit as parameter.
---

## Desafio 02 - Diferença

Dado um número X, retorne a diferença entre X e 10 de forma que o resultado seja sempre um valor positivo. Isto é:
* se X < 10, faça 10 - X, por exemplo, se X = 3, retorne 7 (10 - 3)
* se X > 10, faça X - 10, por exemplo, se X = 15, retorne 5 (15 - 10)

> Complete the 'difference' function below.
>
> The function is expected to return an INTEGER.
>
> The function accepts INTEGER x as parameter.
---

## Desafio 03 - Contagem regressiva

Dado um número X construa um programa que retorne a contagem regressiva no formato X...X-1...X-2...0!!!

Por exemplo, se X = 10, retorne:
10...9...8...7...6...5...4...3...2...1...0!!!

>Complete the 'count_down' function below.
>
>The function is expected to return a STRING.
>
>The function accepts INTEGER x as parameter.
---

## Desafio 04 - Múltiplos de 3 ou 5

Construa um algoritmo que encontre a soma de todos os
números naturais múltiplos de 3 ou 5 menores que um dado número.

Por exemplo, quando listamos todos os números naturais menores que
10 que são múltiplos de 3 ou 5, temos: 3, 5, 6 e 9.

A soma desses números é 3 + 5 + 6 + 9 = 23

> Complete the 'multiples_of_3_or_5' function below.
>
> The function is expected to return an INTEGER.
>
> The function accepts INTEGER roof as parameter.
---

## Desafio 05 - Números Pares da Série de Fibonacci

Na Série de Fibonacci um número é determinado pela soma de seus dois antecessores. A série é iniciada com os valores 1, 2 e a partir do terceiro elemento realiza-se essa conta. Dessa forma, os 10 primeiros elementos dessa série são: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.

A soma dos números pares menores que 100 dessa série é 44. Calcule a soma dos números pares entre os elementos dessa série que sejam menores que um dado número.

***Algumas referências apontam a série de Fibonacci começando em 0. Nesse caso a série seria: 0, 1, 1, 2, 3, 5.... Para efeito dessa atividade consideraremos a série iniciando em "1, 2" conforme o enunciado acima.***

>Complete the 'even_fibonacci_numbers' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER roof as parameter.
---

## Desafio 06 - Enésimo Primo

Um número primo é um número natural que é divisível
exclusivamente por 1 e por ele mesmo.

Construa um algoritmo capaz de calcular o enésimo
número primo para um dado número N.

Por exemplo, para N = 6, tem-se os 6 primeiros números
primos (2, 3, 5, 7, 11, 13) onde 13 é o sexto número primo.


>Complete the 'nth_prime' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER n as parameter.
---

## Desafio 07 - Maior divisor primo

Números primos são aqueles que são divisíveis exclusivamente por 1 e por eles mesmos. Ex: 2, 3, 5, 7, 11, 13, 17, 19. Os divisores primos de 13195, por exemplo, são 5, 7, 13 e 29. Encontre o maior divisor primo de um dado número.

>Complete the 'largest_prime_factor' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER number as parameter.
---

## Desafio 08 - Caixa de Supermercado

Um atendente de supermercado deve lançar os valores dos produtos à medida que os passa no caixa.

Eventualmente ele faz um lançamento errado e para invalidá-lo deve lançar o valor0 (zero) para que o registro anterior não seja considerado.

Na eventualidade de mais de um valor ser lançado errado consecutivamente o atendente lançará tantos valores zero quanto necessários para apagar os
registros incorretos.

Por exemplo, no lançamento: 1, 3, 5, 4, 0, 0, 7, 0, 0, 6 serão considerados para a soma os valores 1, 6, visto que os valores 3, 5, 4 e 7 foram anulados pelos 0.

Construa um algoritmo capaz de processar uma entrada de n números e apresentar na saída a SOMA DOS REGISTROS VÁLIDOS.

Considere a entrada do algoritmo sendo uma lista da seguinte forma [n1, n2, n3, n4,... nX].
No exemplo acima a entrada seria [1, 3, 5, 4, 0, 0, 7, 0, 0, 6]

>Complete the 'caixa' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER_ARRAY values as parameter.
---

## Desafio 09 - Menor Múltiplo

O menor número divisível por todos os números de 1 a 10 é 2520.

Crie um algoritmo capaz de calcular o menor número divisível por todos os números de 1 a um dado número.


>Complete the 'smallest_multiple' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER roof as parameter.
---

## Desafio 10 - Diferença das somas dos quadrados e quadrados da soma

O quadrado da soma dos 10 primeiros números naturais é dado por: (1 + 2 + ... + 10)^2 = 552 = 3025

A soma dos quadrados dos primeiros 10 números naturais é dada por: 1^2 + 2^2 + ... + 10^2 = 385

A diferença entre o quadrado da soma dos 10 primeiros números naturais e a soma dos quadrados desses mesmos números é dada por 3025 - 385 = 2640

Dado um número natural N, construa um algoritmo capaz de calcular a diferença entre o quadrado da soma e a soma dos quadrados dos N primeiros números naturais.


>Complete the 'sum_square_difference' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER n as parameter.
---

## Desafio 11 - Cadeias de quadrados de dígitos

Uma cadeia de números é gerada a partir da soma dos quadrados dos dígitos do número anterior até que o número formado já esteja presente nessa cadeia.

Por exemplo:
* 44 - 32 - 13 - 10 - 1 - 1 (4^2 + 4^2 = 32 | 3^2 + 2^2 = 13 | 1^2 + 3^2 = 10
  | 1^2 + 0^2 = 1 | 1^2 = 1
* 85 - 89 - 145 - 42 - 20 - 4 - 16 - 37 - 58 - 89

Qualquer cadeia que chegue a um número repetido ficará presa em um looping infinito entre a primeira ocorrência desse número e a segunda ocorrência
dele.

No caso do 1, a partir da primeira ocorrência, todos os números serão 1.

Já no caso do 89, uma vez que ele seja atingido, a sequência será eternamente: 89 - 145 - 42 - 20 - 4 - 16 - 37 - 58 - 89

O que é mais incrível é que para qualquer número inteiro que se inicie essa cadeia ela chegará a 1 ou 89.

Construa um algoritmo capaz de contar quantas cadeias terminarão em 89 considerando cadeias que se iniciem com todos os números menores que um dado número N.

>Complete the 'square_digit_chains' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER n as parameter.
---

## Desafio 12 - Números de Lychrel

Números palíndromos podem ser lidos da esquerda para direita ou da direita para esquerda com o mesmo resultado.

Se pegarmos o número 47 e o somarmos ao seu reverso, 74, temos 47 + 74 = 121, que é um número palíndromo.
Nem todos os números geram palíndromos de forma tão rápida quanto 47.

Por exemplo 349

- 349 + 943 = 1292
- 1292 + 2921 = 4213
- 4213 + 3124 = 7337 (palíndromo)

Ou seja, 349 leva 3 iterações para gerar um palíndromo pelas somas dos resultados com seu reverso.

Apesar de não ser formalmente provado, acredita-se que números como 196 jamais gerarão um palíndromo pela somas dos resultados de seus resultados
com os respectivos reversos.

Um número que não gera palíndromos a partir desse processo é chamado de Número de Lychrel.

Acredita-se que para qualquer número abaixo de 10.000
- gerará um palíndromo a partir da soma dos resultados com seus reversos até a 50a iteração
- não será possível gerar um palíndromo nem mesmo com todo o poder computacional disponível no mundo

Construa um algoritmo capaz de identificar a quantidade de números de Lychrel menores que um dado número N < 10.000

---

## Desafio 13 - Soma dos Dígitos

Escreva um programa capaz de encontrar quantos números entre 0 e 1000 têm a soma dos seus dígitos igual a um dado número S.

Por exemplo, para S = 26 temos 3 números, 899, 989 e 998, cujas somas dos algarismos é igual a S.

>Complete the 'digits_sum' function below.
>
>The function is expected to return an INTEGER.
>
>The function accepts INTEGER number_s as parameter.

---

## Desafio 14 - Maior Produto Palíndromo

Um número palíndromo tem o mesmo valor sendo ser lido da direita para a esquerda ou da esquerda para direita, por exemplo: 11, 212, 3773, 1034301...

O maior número palíndromo resultado do produto de dois números de 2 dígitos é 9009 (91 x 99)

Encontre o  maior número palíndromo resultado do produto de dois números com um determinado número de dígitos.

---

## Desafio 15 - Poligramas

Duas palavras A e B são anagramas entre si se podemos transformar a palavra A na palavra B apenas trocando de posição as letras da palavra A.

Por exemplo, "duetos" e "estudo" são anagramas entre si. Um outro exemplo é "bba" e "bab".

Vamos chamar de poligrama uma palavra que consiste na concatenação de duas ou mais palavras que são anagramas entre si.

A primeira dessas palavras é chamada de raiz do poligrama.

Por exemplo, a palavra "bbabab" é um poligrama com raiz "bba", pois ela é a concatenação dos anagramas "bba" e "bab".

Dada uma palavra, escreva um programa que determine se ela é um poligrama.

Caso a palavra seja um poligrama o programa deve retornar a raiz desse poligrama.

Caso contrário deve retornar uma string vazia.

>Complete the 'poligrama' function below.
>
>The function is expected to return a STRING.
>
>The function accepts STRING word as parameter.
---