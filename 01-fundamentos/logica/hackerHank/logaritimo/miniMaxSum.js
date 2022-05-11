// function miniMaxSum(aarr) {
//   let arr = aarr.split(' ')
//   let sum1 = 0;
//   let sum2 = 0;
//   let result = '';

//   for (let i = 1; i < arr.length; i++) {
//     sum1 += parseInt(arr[i]);
//   }

//   for (let j = 0; j < arr.length - 1; j++) {
//     sum2 += parseInt(arr[j]);
//   }

//   if (sum1 > sum2) {
//     return console.log(`${sum2} ${sum1}`);
//   }else {
//     return console.log(`${sum2} ${sum1}`);
//   }

// }


function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => {
        return a + b;
    });
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);

    console.log(`${min} ${max}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
// miniMaxSum(13579);