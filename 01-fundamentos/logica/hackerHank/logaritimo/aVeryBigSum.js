function aVeryBigSum(ar) {
  const sum = ar.reduce((acc, e) => acc + e,0);
  return sum;
}

console.log(aVeryBigSum([11, 10, 12, 13]))
