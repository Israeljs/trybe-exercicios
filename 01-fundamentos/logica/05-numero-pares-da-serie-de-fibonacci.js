/*
------- INICIO DO ENUNCIADO --------
Na Série de Fibonacci um número é determinado pela soma
de seus dois antecessores.
A série é iniciada com os valores 1, 2 e a partir do
terceiro elemento realiza-se essa conta.
Dessa forma, os 10 primeiros elementos dessa série são:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89.
A soma dos números pares menores que 100 dessa série é 44.
Calcule a soma dos números pares entre os elementos dessa
série que sejam menores que um dado número.
* Algumas referências apontam a série de Fibonacci começando
em 0. Nesse caso a série seria: 0, 1, 1, 2, 3, 5....
Para efeito dessa atividade consideraremos a série iniciando
em "1, 2" conforme o enunciado acima.
------- FIM DO ENUNCIADO --------

Complete the 'even_fibonacci_numbers' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER roof as parameter.
*/

const { strict: assert } = require('assert');

// @EduardoSantosF
function even_fibonacci_numbers(roof) {
  const series = [1, 2];
  while (series[series.length - 1] < roof) {
    const lastI = series.length - 1;
    const sum = series[lastI] + series[lastI - 1];
    if (sum > roof) {
      break;
    }
    series.push(sum);
  }
  return series.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      return cur + acc;
    }
    return acc;
  }, 0);
};

console.log(even_fibonacci_numbers(100))

// @RafaelMGuimaraes
// outra forma
function even_fibonacci_numbers01(roof) {
  let first = 1;
  let second = 2;
  let even_sum = 0;

  while (second < roof) {
    if (second % 2 == 0) even_sum += second;
    let temp = first;
    first = second;
    second = first + temp;
  }

  return even_sum;
};

// @TESTES
function test_hackerrank(){
  // Teste público
  assert.deepEqual(even_fibonacci_numbers(100),44);
  // Teste fechado
  assert.deepEqual(even_fibonacci_numbers(3000000),1089154);
};

function even_fibonacci(roof) {
  const series = [1, 2];
  let result = [];

  while (series[series.length - 1] < roof) {
    let last = series.length - 1;
    let sum = series[last] + series[last - 1];// ultima posição do array mais a penultima
    if (sum > roof) {
      break;
    }
    series.push(sum);
  }

  let serie = [series.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      return acc + curr
    }
    return acc;
  },0)]
  return result = [...series, ...serie];
}

function even_fibonacci(roof) {
  let first = 1;
  let second = 2;
  let sum = 0;

  while (second < roof) {
    if (second % 2 === 0) sum += second;
    let temp = first;
    first = second;
    second = second + temp; 
  }
  return sum;
}

console.log(even_fibonacci(100))
