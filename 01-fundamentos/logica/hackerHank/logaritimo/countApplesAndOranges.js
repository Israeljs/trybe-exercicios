function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCount = 0;
  let orangesCount = 0;

  apples.forEach((apple) => {
    if (apple + a >= s && apple + a <= t) {
      applesCount += 1;
    }
  });

  oranges.forEach((orange) => {
    if (orange + b <= t && orange + b >= s) {
      orangesCount += 1;
    }
  });

  console.log(applesCount)
  console.log(orangesCount);
}

countApplesAndOranges(3 , 7, 1, 9, [-2, 3, 4], [-4, 4, 5]);
