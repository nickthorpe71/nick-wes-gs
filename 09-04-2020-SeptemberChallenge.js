/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let hash = {};
  for(let i = 0; i < S.length; i++) {
    if(hash[S[i]]){      
      hash[S[i]][1] = i;
    }else{
      hash[S[i]]= [i,i];
    }
  }
  
  console.log(hash);
  let result = [];
  let count = 0;
  let lastDigit = hash[S[0]][1];
  for(let j = 0; j < S.length; j++) {
    if(j === lastDigit) {
      result.push(count+1);
      count = 0;
      console.log(hash[S[j]][1]);
      if(hash[S[j+1]]){
        lastDigit = hash[S[j+1]][1];
      }      
    } else if(hash[S[j]][1] > lastDigit){
      lastDigit = hash[S[j]][1];
      count++;
    } else {
      count++;
    }
  }  
  return result;
};


console.log(partitionLabels('ababcbacadefegdehijhklij'));