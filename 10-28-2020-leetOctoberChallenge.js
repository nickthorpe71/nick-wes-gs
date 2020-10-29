// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

const main = (nums) => {
  let result = [];
  let start = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i+1] !== nums[i] + 1) {
      nums[start] === nums[i]
        ? result.push(`${nums[start]}`)
        : result.push(`${nums[start]}->${nums[i]}`);      
      start = i + 1;
    }
  }

  return result;
};

console.log(main([0,1,2,4,5,7])); //["0->2","4->5","7"]