function points(dice) {
  let numCount = {};

  for (let i = 0; i < 5; i++) {
    if (numCount[dice[i]])
      numCount[dice[i]] = numCount[dice[i]] + 1;
    else
      numCount[dice[i]] = 1;
  }

  if (Object.keys(numCount).length === 1)
    return 50;

  if (Object.keys(numCount).length === 2
    && (Object.values(numCount)[0] === 1 || Object.values(numCount)[0] === 4)) {
    return 40;
  }

  if (Object.keys(numCount).length === 2
    && (Object.values(numCount)[0] === 3 || Object.values(numCount)[0] === 2)) {
    return 30;
  }

  if (Object.keys(numCount).length === 5) {
    let sorted = Object.keys(numCount).sort().map(num => Number(num));
    let start = 0;
    let count = 0;

    if (sorted[0] === 1 && sorted[1] === 3)
      start = 1;

    for (let i = start; i < 4 + start; i++) {
      if (sorted[i + 1] === sorted[i] + 1) {
        count++;
      }
    }

    if (count === 4 - start)
      return 20;
  }

  return 0;
}

console.log(points('15643'));