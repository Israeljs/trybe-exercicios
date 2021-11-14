// function fahrenheit_to_celsius(temp_fahrenheit) {
// const celso = ((temp_fahrenheit - 32) / 1.8).toFixed(1);
// return celso;
// }

// console.log(fahrenheit_to_celsius(95));

// function difference(x) {
//   let diff = 0;
//   if (x < 10) {
//     diff = 10 - x;
//   } else {
//     diff = x - 10;
//   }
//   return diff;
// }
// console.log(difference(15));

// function count_down(x) {
//   let elem = x;
//   for (let i = 1; i < x; i++) {
//     elem = `${elem}...${x - i}`;
//   }
//   return `${elem}...0!!!`;
// }
// console.log(count_down(10));

// function multiples_of_3_or_5(roof) {
//   let soma = 0;
//   for (let i = 1; i < roof; i++) {
//     const elem = roof - i;
//     if (elem % 5 === 0 || elem % 3 === 0) {
//       soma += elem;
//     }
//   }
//   return soma;
// }
// multiples_of_3_or_5(10)
// console.log(multiples_of_3_or_5(10));

// function even_fibonacci_numbers(roof) {
//   let soma = [];
//   for (let i = 1; i < roof; i++) {
//     const elem = i;
//     if (elem % 2 === 0) {
//       soma[i - 1] = elem;
//     }
//     soma.splice(i, 1);
//   }
//   return soma;
// }
// console.log(even_fibonacci_numbers(10));

// function fibonacci(t){
//   var termo = t;
//   var penultimo=0, ultimo=1;
//   var numero;

//   if(termo<=2)
//    numero = termo-1;
//   else
//    for(var count=3 ; count<=termo ; count++){
//     numero = ultimo + penultimo;
//     penultimo = ultimo;
//     ultimo = numero;
//    }
//    return numero;
//   }
//   console.log(fibonacci(10));

// function nth_prime(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr[i] = i;
//   }
//   return arr;
// }
// console.log(nth_prime(6));

// function nth_prime(n) {
//   let arr = [];
//   for (let i = 0; i++;) {
//     arr[i] = i;
//   }
//   return arr;
// }
// console.log(nth_prime(6));

function digits_sum() {
    let arr = [];
    for (let i = 0; i <= 100; i++) {
      arr[i] = i;
    }
  
    for (let i = 0; i < arr.length; i++) {
      const sum = arr[i]
      .toString()
      .split('')
      .map(Number)
      .reduce(function (a, b) {
          return a + b;
      }, 0);
      arr[i] = sum;
      
    }
    return arr;
  }
  console.log(digits_sum())
  
  const f = () => {
    const arr = [2568];
    const sum = arr[0]
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum
  }
  console.log(f());
