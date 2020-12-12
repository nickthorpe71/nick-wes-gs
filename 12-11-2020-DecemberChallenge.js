// Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

// Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer, but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //check if nums[check] === nums[check - 1]
    //check if nums[check] === nums[check - 2]

    //if both true then assign nums[check] to be the next number not equal to nums[check]

    if(nums.length <= 2) {
        return 2
    }

    let checkedIndex = 2;
    let currentLength;
    
    for(let saveToIndex = 2; checkedIndex < nums.length; saveToIndex++) {
        if(nums[checkedIndex] === nums[saveToIndex-1] && nums[checkedIndex] === nums[saveToIndex-2]) {            
            while(nums[checkedIndex] === nums[saveToIndex - 1]){
                checkedIndex++
            }
        }
        nums[saveToIndex] = nums[checkedIndex]
        checkedIndex++
        
        nums[saveToIndex] === undefined ? currentLength = saveToIndex - 1: currentLength = saveToIndex
    }

    while(currentLength + 1 !== nums.length) {
        nums.pop()
    }

    return currentLength + 1
};

console.log(removeDuplicates([1,1,1])) //5, nums = [1,1,2,2,3]
