var findRightInterval = function(intervals) {
  let result = [];
  let currentCompare;
  for(let i = 0; i < intervals.length; i++){
      
    currentCompare = null;
    for(let j = 0; j < intervals.length; j++){            
      if (intervals[j][0] >= intervals[i][1]) {
        if(currentCompare === null || intervals[j][0] < intervals[currentCompare][0])
          currentCompare = j;                    
      }
      // console.log(currentCompare,i,j);
    }
    console.log(currentCompare,i);
    currentCompare !== null
      ?result[i] = currentCompare
      :result[i] = -1;          
  }
  return result;    
};

console.log(findRightInterval([ [3,4], [2,3], [1,2] ]));