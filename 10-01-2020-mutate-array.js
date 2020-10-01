var moveZeros = function (arr) {
  const result = [];
  let zeros = 0;

  for (let i = 0; i < arr.length; i++)
    arr[i] !== 0 ? result.push(arr[i]) : zeros++;


  for (let i = 0; i < zeros; i++)
    result.push(0);

  return result;
};

var moveZerosAlt = function (arr) {
  var filtedList = arr.filter(function (num) { return num !== 0; });
  var zeroList = arr.filter(function (num) { return num === 0; });
  return filtedList.concat(zeroList);
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));