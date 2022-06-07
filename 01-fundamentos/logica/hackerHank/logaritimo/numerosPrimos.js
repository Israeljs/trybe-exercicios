// const isPrime = (n) => {
//   // divide por todos os números antes de n;
//     for (let i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//       return true;
//     }
// }


const isPrime = (num)=> {
  let quantDivisores = 0;

  for (let index = 1; index <= num; index++) {
    quantDivisores += isExactDivision(num, index);  
  }

  return (quantDivisores === 2) ? 'É primo':'Não é primo';

}

const isExactDivision = (dividendo, divisor)=> (dividendo % divisor === 0) ? 1 : 0;


console.log(isPrime(2));
