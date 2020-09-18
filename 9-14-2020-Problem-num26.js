// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

let nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  let curIndex = 0;
  let curNum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== curNum) {
      curNum = nums[i];
      curIndex++;
      nums[curIndex] = curNum;
    }
  }

  return curIndex + 1;
};

console.log(nums.slice(0, removeDuplicates(nums)));

// Runtime: 108 ms, faster than 38.19% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 39.1 MB, less than 70.92% of JavaScript online submissions for Remove Duplicates from Sorted Array.