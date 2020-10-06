const nextBigger = n => {
  let startNum = n;
  let result = 0;
  let permutations = [];

  if (startNum < 0) {
    startNum *= -1;
    permutations = findPermutations(String(startNum));
    if (permutations.length < 2) {
      return -1;
    } else {
      result = Number.MIN_SAFE_INTEGER;
      for (let permutation of permutations)
        if (parseInt(permutation) < startNum && parseInt(permutation) > result)
          result = permutation;

      if (result === Number.MIN_SAFE_INTEGER || parseInt(result) === n)
        return -1;
    }
    result *= -1;
  }
  else {
    permutations = findPermutations(String(n));
    if (permutations.length < 2) {
      return -1;
    } else {
      result = Number.MAX_SAFE_INTEGER;
      for (let permutation of permutations)
        if (parseInt(permutation) > startNum && parseInt(permutation) < result)
          result = permutation;

      if (result === Number.MAX_SAFE_INTEGER || parseInt(result) === n)
        return -1;
    }
  }

  return parseInt(result);
};

// recursion
let findPermutations = str => {
  if (!str || typeof str !== 'string') {
    return 'Please enter a string';
  } else if (str.length < 2) {
    return str;
  }

  let permutationArr = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1, str.length);

    // for each result of the recursive function
    for (let permutation of findPermutations(remaining)) {
      permutationArr.push(char + permutation);
    }
  }

  return permutationArr;
};

// console.log(nextBigger(12)); // 21
// console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
// console.log(nextBigger(414)); // 441
// console.log(nextBigger(-1)); // -1
console.log(nextBigger(9));   // -1
// console.log(nextBigger(111)); // -1
// console.log(nextBigger(531)); // -1