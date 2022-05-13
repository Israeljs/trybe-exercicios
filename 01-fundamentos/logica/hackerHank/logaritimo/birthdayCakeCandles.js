function birthdayCakeCandles(candles) {
  // candles.sort((a, b) => b - a);
  // const maximo = candles[0];
  const maximo = Math.max(...candles);
  let sum = 0;
  candles.forEach((cand) => {
    if (cand === maximo) {
      sum += 1;
    }
  })
return sum;
}

const candles = [4, 4, 1, 3];

console.log(birthdayCakeCandles(candles));
