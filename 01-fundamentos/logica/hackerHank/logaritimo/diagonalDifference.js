function diagonalDifference(arr) {
  const d1 = arr.reduce((acc, e, i) => acc + e[i], 0);
  const d2 = arr.reduce((acc, e, i) => acc + e[(e.length - 1) - i], 0);

  return Math.abs(d1 - d2);
}

console.log(diagonalDifference([
[1, 2, 3],
[4, 5, 6],
[9, 8, 9]
]));
