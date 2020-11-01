function sumOfN(n) {
  let negative = false;
  const result = [0];

  if (n < 0) {
    negative = true;
    n *= -1;
  }

  for (let i = 1; i <= n; i++)
    result.push(result[i - 1] + i);

  if (negative)
    for (let i = 0; i < result.length; i++)
      if (result[i] !== 0)
        result[i] = result[i] * -1;

  return result;
}

console.log(sumOfN(3)); // [0, 1, 3, 6]
console.log(sumOfN(-4));  // [0, -1, -3, -6, -10]
console.log(sumOfN(1)); // [0, 1]
console.log(sumOfN(-6)); // [0, -1, -3, -6, -10, -15, -21]