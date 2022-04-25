// function compareTriplets(a, b) {
//   let alice = 0;
//   let bob = 0;
//   for (let i = 0; i < a.length; i++) {

//     if (a[i] > b[i]) {
//       alice += 1;
//     } else if (a[i] < b[i]) {
//       bob += 1;     
//     }

//   }
//   return [alice, bob];
// }
function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  a.forEach((e, i) => {
    if (e > b[i]) {
      alice += 1;
    } else if (e < b[i]) {
      bob += 1;     
    }
  });

  return [alice, bob];
}
a = [1, 3, 3]
b = [3, 2, 1]
console.log(compareTriplets(a, b));
