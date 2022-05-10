function miniMaxSum(arr) {
  let sum = 0;
  let ar = [];
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    ar.push(sum);
  }

  ar.sort();

  for (let x = 0; x < ar.length; x++) {
    result += `${ar[x]} `;
    
  }
return console.log(result);
}

miniMaxSum([1, 3, 5, 7, 9]);