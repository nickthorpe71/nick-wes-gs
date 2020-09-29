// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

var numSubarrayProductLessThanK = function(nums, k) {
  //loop through with a start
  //loop through with an end
  //increment count if product from start to end < k
  let count = 0;
  for(let i = 0; i < nums.length; i++){
    let product = 1;
    for(let j = i; j < nums.length; j++){
      product = product * nums[j];

      if(product < k ){
        count++;
        console.log(i,j);
      }
      else {
        break;
      }
    }
  } 
  return count;
};


console.log(numSubarrayProductLessThanK([10,5,2,6],100));
