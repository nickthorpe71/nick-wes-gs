// Sort "array" so that all elements with the value of zero are moved to the
// end of the array, while the other elements maintain order.
// [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
// Zero elements also maintain order in which they occurred.
// [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

// Do not use any temporary arrays or objects. Additionally, you're not able
// to use any Array or Object prototype methods such as .shift(), .push(), etc

// the correctly sorted array should be returned.

function removeZeros(array) {

  let numberOfZeros = 0;

  for (let i = 0; i < array.length; i++) {
    let zeroHolder;

    if (array[i] === 0 || array[i] === '0') {
      zeroHolder = array[i];

      for (let j = i; j < array.length; j++) {
        array[j] = array[j + 1];
      }

      array[array.length - 1] = zeroHolder;
      numberOfZeros++;

      if (i < array.length - numberOfZeros && (array[i] === 0 || array[i] === '0'))
        i--;
    }
  }

  return array;
}


var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
  solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];

var input2 = [0, '0', 1, '0', 0],
  solution2 = [1, '0', 0, 0, '0'];

console.log(removeZeros(input2));