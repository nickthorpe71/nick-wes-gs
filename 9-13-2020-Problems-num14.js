var longestCommonPrefix = function (strs) {
  let result = '';
  let shortest = 1000;

  if (strs.length > 0) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i].length < shortest)
        shortest = strs[i].length;
    }

    for (let i = 0; i < shortest; i++) {
      let currentLetter = strs[0][i];

      for (let j = 0; j < strs.length; j++) {

        if (strs[j][i] !== currentLetter) {
          return result;
        }
      }

      result += currentLetter;
    }
  }

  return result;
};

console.log(longestCommonPrefix(['a']));