// Hash map iteration is substantially faster

/** O(n) w/ hash map
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let map = {};
  let result = '';

  for (let i = 0; i < s.length; i++) {
    map[indices[i]] = s[i];
  }
  for (let i = 0; i < indices.length; i++) {
    result += map[i];
  }

  return result;
};

/** O(n) w/ array
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreStringFirst = function (s, indices) {
  let newIndices = new Array(indices.length);
  let result = '';

  for (let i = 0; i < indices.length; i++) {
    newIndices[indices[i]] = i;
  }
  for (let i = 0; i < indices.length; i++) {
    result += s[newIndices[i]];
  }

  return result;
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));