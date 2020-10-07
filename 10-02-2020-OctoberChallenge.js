// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let result;
  function recursive(candidates,target){
    for(let i = 0; i < candidates.length; i++){
      if (target === candidates[i]){
        return [target];
      }
  
      if (target > candidates[i]){
        let solution = [candidates[i], ...combinationSum(candidates, target - candidates[i])];
  
        result.push(solution);
      }  
    }
  }  
};

console.log(combinationSum([2,3,5],8)); //[[2,2,2,2],[2,3,3],[3,5]]

console.log(combinationSum([2],1)); //[]

