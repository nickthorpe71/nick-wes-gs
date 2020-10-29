function solve(arr) {
  let result = 1;

  arr.forEach((innerArray, i) => {
    // sort each inner array
    arr[i] = mergeSort(innerArray);

    // remove duplicates
    for (let j = 0; j < arr[i].length; j++)
      if (arr[i][j] === arr[i][j + 1])
        arr[i].splice(j, 1);

  });

  // multiply all lengths 
  arr.forEach(innerArray => {
    result *= innerArray.length;
  });

  return result;
}

const mergeSort = (arr) => {
  if (arr.length < 2)
    return arr;

  const middle = parseInt(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];

  // push the two arrays to result in sorted order
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // push any remaining elements to the result array 
  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
};

console.log(solve([[8, 2, 8, 4, 4, 7, 8, 2, 5, 0, 1, 1], [8, 2, 8, 4, 4, 7, 8, 2, 5, 0, 1, 1], [8, 2, 8, 4, 4, 7, 8, 2, 5, 0, 1, 1]]));