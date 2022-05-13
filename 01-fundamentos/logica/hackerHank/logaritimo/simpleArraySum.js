// Complete the simpleArraySum function in the editor below. 
// It must return the sum of the array elements as an integer.

const arr = [1, 2.5, 3, 4, 5];
function simpleArraySum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return Math.round(sum);

  // return ar.reduce((acc, i) => acc + i, 0);
}


console.log(simpleArraySum(arr));
