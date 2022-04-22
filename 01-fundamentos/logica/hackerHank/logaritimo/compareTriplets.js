function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < a.length; i++) {

    if (a[i] > b[i]) {
      alice += 1;
    } else if (a[i] < b[i]) {
      bob += 1;     
    }

  }
  return [alice, bob];
}
a = [1, 2, 3]
b = [3, 2, 1]
console.log(compareTriplets(a, b));

// function compareTriplets(a, b) {
//   let alice = 0;
//   let bob = 0;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {     
//       if (a[i] > b[j]) alice += 1;
//       if (a[i] < b[j]) bob =+ 1;
//       if (a[i] < b[j]) alice += 1; bob =+ 1;
//     }
//   }
//   return [alice, bob];
// }
// a = [1, 2, 3]
// b = [3, 2, 1]
// console.log(compareTriplets(a, b));