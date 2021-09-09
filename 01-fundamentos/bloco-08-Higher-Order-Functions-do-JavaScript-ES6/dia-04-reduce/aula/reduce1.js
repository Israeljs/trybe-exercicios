 
const numbers = [2, 3, 4, 6, 8, 12, 24];

// somatório com for tradicional
// let sum = 0;

// for(let index = 0; index < numbers.length; index += 1){
//   sum += numbers[index];
// }

// console.log(sum)

// somatório com forEach
// let sum = 0;

// numbers.forEach((number) => {
//   sum += number;
// })

// console.log(sum)

// somatório com reduce
const reduceCallback = (accumulator, number) => {
  if(number % 2 === 0){
    return number + accumulator;
  }

  return accumulator;
};

const sum = numbers.reduce(reduceCallback, 0);

console.log(sum)