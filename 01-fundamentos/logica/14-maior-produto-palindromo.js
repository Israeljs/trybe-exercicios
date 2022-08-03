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

const numberToArray = (digits) => {
  const arrayNumber = digits.toString().split('').map(Number);
  // console.log(arrayNumber);
  return arrayNumber;
}

const isEqual = (i, digits) => {
  const indexArray = numberToArray(i);
  const left = indexArray.slice(0, digits).join('');
  const right = indexArray.slice(-(digits)).reverse().join('');
  // console.log(left, right);
  return left === right;
}

// console.log(isEqual(1001, 2));

function largest_palindrome_product(digits) {
  let largestPalindrome = 0;
  let number = 0;
  let index = 0;

  if (digits === 2) {
    number = 9999;
    index = 1000;
  }
  if (digits === 3) {
    number = 999999;
    index = 10000;
  }

  for (index; index < number; index++) {
    if (isEqual(index, digits)) {
      largestPalindrome = index;
    }else {
      largestPalindrome = largestPalindrome;
    }
  }

  return largestPalindrome;
};

console.log(largest_palindrome_product(2));

// @TESTES
function test_hackerrank() {
    // Teste público
    assert.deepEqual(largest_palindrome_product(2),9009);
    // Teste fechado
    assert.deepEqual(largest_palindrome_product(3),906609);
};


    // Javascript problem to find out the
    // largest palindrome number
    // which is product of two
    // n digit numbers.
     
    // Function to calculate largest
    // palindrome which isproduct of
    // two n-digits numbers
    function larrgestPalindrome(n)
    {
        let upper_limit = Math.pow(10, n) - 1;
      
      
        // largest number of n-1 digit.
        // One plus this number
        // is lower limit which is
        // product of two numbers.
        let lower_limit = 1 +
        parseInt(upper_limit / 10, 10);
      
        // Initialize result
        let max_product = 0;
          
        for (let i = upper_limit; i >= lower_limit; i--)
        {
            for (let j = i; j >= lower_limit; j--)
            {
                // calculating product of two
                // n-digit numbers
                let product = i * j;
                if (product < max_product)
                    break;
                let number = product;
                let reverse = 0;
      
                // calculating reverse of product
                // to check whether it is
                // palindrome or not
                while (number != 0)
                {
                    reverse = reverse * 10 + number % 10;
                    number = parseInt(number / 10, 10);
                }
      
                // update new product if exist and if
                // greater than previous one
                if (product == reverse &&
                product > max_product)
                    max_product = product;
            }
        }
        return max_product;
    }
     
    let n = 2;
    console.log(larrgestPalindrome(2));
      document.write();

