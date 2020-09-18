// Given a string s containing only lower case English letters and the '?' character, convert all the '?' characters into lower case letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

// It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

// Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.


var modifyString = function(s) {
  let result = s.split('');
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for(let i = 0; i < result.length; i++) {
    if(result[i] === '?'){      
      let leftChar=result[i-1];
      let rightChar=result[i+1];

      if(!leftChar){
        leftChar = 0;
      }

      if(!rightChar){
        rightChar = 0;
      }

      let letterIndex = 0;

      while(alphabet[letterIndex] === leftChar || alphabet[letterIndex] === rightChar){
        letterIndex++;
      }

      // console.log(alphabet[letterIndex],result[i]);

      result[i] = alphabet[letterIndex];
    }    
  }
  
  return result.join('');
};

// console.log(modifyString('j?qg??b'));
// console.log(modifyString('??yw?ipkj?'));
// console.log(modifyString('ubv?w'));
// console.log(modifyString('?zs'));
// console.log(modifyString('?'));

//2.

// Given two arrays of integers nums1 and nums2, return the number of triplets formed (type 1 and type 2) under the following rules:

// Type 1: Triplet (i, j, k) if nums1[i]2 == nums2[j] * nums2[k] where 0 <= i < nums1.length and 0 <= j < k < nums2.length.
// Type 2: Triplet (i, j, k) if nums2[i]2 == nums1[j] * nums1[k] where 0 <= i < nums2.length and 0 <= j < k < nums1.length.

var numTriplets = function(nums1, nums2) {
  let count = 0;

  for(let i = 0; i < nums1.length; i++) {
    for(let j = 0; j < nums2.length; j++) {
      for(let k = j+1; k < nums2.length; k++) {
        if(Math.pow(nums1[i],2) === nums2[j] * nums2[k]){
          console.log('type 1',i,j,k);
          count++;
        }
      }
    }
  }

  for(let i = 0; i < nums2.length; i++) {
    for(let j = 0; j < nums1.length; j++) {
      for(let k = j+1; k < nums1.length; k++) {
        if(Math.pow(nums2[i],2) === nums1[j] * nums1[k]){
          console.log('type 2',i,j,k);
          count++;
        }
      }
    }
  }

  return count;
};

// console.log(numTriplets([1,1],[1,1,1]));

//3.

// Given a string s and an array of integers cost where cost[i] is the cost of deleting the ith character in s.

// Return the minimum cost of deletions such that there are no two identical letters next to each other.

// Notice that you will delete the chosen characters at the same time, in other words, after deleting a character, the costs of deleting other characters will not change.

var minCost = function(s, cost) {
  let totalCost = 0; 

  for(let i = 0; i < s.length; i++ ){
    
    if(s[i] === s[i+1]){
      let firstIndex = i;
      let lastIndex = firstIndex + 1;
      while(s[lastIndex] === s[firstIndex]){
        lastIndex++;
      }

      lastIndex--;

      let highestCost = 0;
      for(let j = firstIndex; j <= lastIndex; j++){ 
        totalCost += cost[j];       
        if(highestCost < cost[j]){          
          highestCost = cost[j];          
        }
        // console.log(totalCost);
      }

      totalCost = totalCost - highestCost;

      // console.log(totalCost);
      i = lastIndex;
    }
    
  }

  return totalCost;
};

// console.log(minCost('abaac',[1,2,3,4,5]));
// console.log(minCost('bbbaaa',[4,9,3,8,8,9]));

//4.

// Alice and Bob have an undirected graph of n nodes and 3 types of edges:

// Type 1: Can be traversed by Alice only.
// Type 2: Can be traversed by Bob only.
// Type 3: Can by traversed by both Alice and Bob.
// Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type typei between nodes ui and vi, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.

// Return the maximum number of edges you can remove, or return -1 if it's impossible for the graph to be fully traversed by Alice and Bob.

const helperAlice = () => {
  //given an array of the nodes and a starting point
  //have a data structure to know which points are accessible

  //loop through the array of nodes and check if they touch any point which is already accessible
};