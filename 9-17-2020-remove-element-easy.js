let nums = [3, 2, 2, 3];

// first iteration
var removeElementOld = function (nums, val) {
  let otherIndices = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val)
      otherIndices.push(nums[i]);
  }

  for (let i = 0; i < otherIndices.length; i++) {
    nums[i] = otherIndices[i];
  }

  return otherIndices.length;
};

// final
var removeElement = function (nums, val) {
  let idx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    }
  }

  return idx;
};

console.log(removeElement(nums, 2));
console.log(nums);