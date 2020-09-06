/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  let subArrs = {
    0: {
      index: -1,
      negativeCount: 0,
      first: null,
      last: null,
    }
  };
  let hashIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      subArrs[hashIndex].index++;
      if (nums[i] < 0) {
        if (subArrs[hashIndex].first === null) {
          subArrs[hashIndex].first = subArrs[hashIndex].index;
        }
        subArrs[hashIndex].negativeCount++;
        subArrs[hashIndex].last = subArrs[hashIndex].index;
      }
    } else {
      hashIndex++;
      subArrs[hashIndex] = {
        index: -1,
        negativeCount: 0,
        first: null,
        last: null,
      };
    }
  }

  let maxLength = 0;

  for (const subArr of Object.values(subArrs)) {
    if (subArr.negativeCount % 2 === 0) {
      if (subArr.index + 1 > maxLength)
        maxLength = subArr.index + 1;
    } else {
      let firstToEnd = subArr.index - subArr.first;
      let zeroToLast = subArr.last;

      if (firstToEnd >= zeroToLast && firstToEnd > maxLength) {
        maxLength = firstToEnd;
      } else if (zeroToLast > maxLength) {
        maxLength = zeroToLast;
      }
    }
  }

  return maxLength;
};

console.log(getMaxLen([1, 1, -1, -7, -3, 0, 1, -5, -4]));