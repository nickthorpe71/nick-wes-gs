var containsPattern = function (arr, m, k) {
  let count = 1;
  for (let i = 0; i < arr.length - m; i++) {
    let selector1 = [];
    let selector2 = [];

    for (let j = 0; j < m; j++) {
      selector1.push(arr[i + j]);
    }
    for (let x = 0; x < m; x++) {
      selector2.push(arr[i + m + x]);
      if (selector2[x] !== selector1[x]) {
        count = 1;
        break;
      }
      if (x === m - 1) {
        count++;
      }
    }
    if (count === k)
      return true;
  }
  return false;
};

console.log(containsPattern([1, 2, 1, 2, 1, 2, 4, 4], 2, 3));