// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {  
  if(k > nums.length)
    k = k % nums.length;
  reverseSubArray(nums,nums.length - 1, 0);  
  reverseSubArray(nums, k - 1, 0);
  reverseSubArray(nums, nums.length - 1, k);
  return nums;
};

function reverseSubArray(array, topIndex,botIndex){
  while(topIndex - botIndex > 0) {
    const temp = array[topIndex];
    array[topIndex] = array[botIndex];
    array[botIndex] = temp;
    topIndex--;
    botIndex++;
  }
}

console.log(rotate([1,2,3,4,5,6,7],9));