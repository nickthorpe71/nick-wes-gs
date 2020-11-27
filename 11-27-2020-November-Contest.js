/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') === word2.join('');
};

// console.log(arrayStringsAreEqual(["a", "bce"], ["ab", "ce"]));

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  const alphaNum = {
    1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g',
    8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n',
    15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u',
    22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'
  };

  let remainingLength = n;
  let remainder = k;
  let result = new Array(n);

  for (let i = 0; i < n; i++) {
    if (remainder >= remainingLength + 25) {
      result[remainingLength - 1] = 'z';
      remainingLength--;
      remainder -= 26;
    }
    else {
      let letterToAdd = remainder - remainingLength + 1;
      result[remainingLength - 1] = alphaNum[letterToAdd];
      remainingLength--;
      remainder -= letterToAdd;
    }
  }

  return result.join('');
};

console.log(getSmallestString(5, 73)); // "aay"

