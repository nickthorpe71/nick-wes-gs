// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 const runningSum = function(nums) {
    let runningSums = []
    let currentRunningSum = 0
    nums.forEach((num, index) => {
        currentRunningSum+=num
        runningSums[index] = currentRunningSum
    })
    
    return runningSums    
};

console.log(runningSum([1,2,3,4])) //[1,3,6,10]
