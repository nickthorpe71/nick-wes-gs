function mysteryRange(s, n) {
  for (var i = 1; i < 100; i++) {
    var s1 = Array.from({ length: n }, (_, k) => k + i).join('');
    var temp = [...s1].sort().join('');
    if (temp === [...s].sort().join('')) {
      if (s.indexOf(i) >= 0 && s.indexOf(i + n - 1) >= 0) return [i, i + n - 1];
    }
  }
}

/**
 * Returns the number of times the given character appears in the string,
 * or if more than one character is supplied an array of character counts.
 */
String.prototype.characterCount = function (charsToCount) {
  // your solution
  let result = {};

  if (!charsToCount || charsToCount.length < 1)
    return undefined;

  for (let i = 0; i < charsToCount.length; i++) {
    result[`${charsToCount[i]}${i}`] = 0;

    for (let j = 0; j < this.length; j++) {
      if (this[j] === charsToCount[i]) {
        result[`${charsToCount[i]}${i}`] = result[`${charsToCount[i]}${i}`] + 1;
      }
    }
  }

  return Object.values(result).length > 1 ? Object.values(result) : Object.values(result)[0];
};

console.log('booop-booop-deee-doo-dooop'.characterCount(['a', 'd', 'o', 'o', 'd', 'a']));
