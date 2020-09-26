/** 
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        let valueCheck = Math.abs(nums[i] - nums[j]);
        let indexCheck = Math.abs(i - j);

        if (valueCheck <= t && indexCheck <= k) {
          return true;
        }

      }
    }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));

// https://leetcode.com/submissions/detail/400966809/?from=/explore/featured/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3446/

// The more optimal way to do this would be with a hash map