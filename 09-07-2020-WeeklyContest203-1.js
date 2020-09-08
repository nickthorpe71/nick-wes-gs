var mostVisited = function(n, rounds) {
  let hash = {};    
  hash[rounds[0]]=1;
  for(let i = 1; i < rounds.length; i++) {
    let currentSector = rounds[i-1];
    while(currentSector !== rounds[i]){
      if(currentSector === n){
        currentSector = 1;
      } else {
        currentSector++;
      }
      
      if(hash[currentSector]){
        hash[currentSector]++;
      } else {
        hash[currentSector] = 1;
      }
          
      
    }
  }

  let max = [[0,0]];
  for(let j = 1; j <= n; j++){
    if(hash[j] > max[0][1]){
      max = [[j, hash[j]]];
    } else if(hash[j] === max[0][1]){
      max.push([j,hash[j]]);
    }
  }

  let results = max.map(element => element[0]);
  results.sort((a,b) => a-b);

  return results;
  
};

console.log(mostVisited(4,[1,3,1,2]));