// On a 2-dimensional grid, there are 4 types of squares:

// 1 represents the starting square.  There is exactly one starting square.
// 2 represents the ending square.  There is exactly one ending square.
// 0 represents empty squares we can walk over.
// -1 represents obstacles that we cannot walk over.
// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.


var uniquePathsIII = function(grid) {
  let count = 0;
  let totalZeroes = 0;
  let start = [];
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] === 0 ){
        totalZeroes++;
      }

      if(grid[i][j] === 1){
        start = [i, j];
      }
    }
  }

  console.log('totalZeroes', totalZeroes);

  function movement(rowIndex,colIndex,zeroes) {
    const currentIndexValue = grid[rowIndex][colIndex];
    console.log(' zeroes',zeroes);
    
    if(zeroes !== totalZeroes && currentIndexValue === 2){      
      console.log('unsuccessful path', zeroes);
      return;
    }

    if(zeroes === totalZeroes && currentIndexValue === 2){      
      count+=1;
      console.log('successful path', zeroes);
      return;
    }

    //Up is zero
    if(rowIndex - 1 >= 0 && (grid[rowIndex-1][colIndex] === 0 || grid[rowIndex-1][colIndex] === 2)){
      grid[rowIndex][colIndex] = -1;
      console.log(' Up');
      movement(rowIndex - 1, colIndex, zeroes + 1);      
      grid[rowIndex][colIndex] = 0;
    }

    //Down is zero
    if(rowIndex + 1 < grid.length && (grid[rowIndex+1][colIndex] === 0 || grid[rowIndex+1][colIndex] === 2)){
      grid[rowIndex][colIndex] = -1;
      console.log(' Down');
      movement(rowIndex + 1, colIndex, zeroes + 1);
      grid[rowIndex][colIndex] = 0;
    }

    //Left is zero
    if(colIndex - 1 >= 0 && (grid[rowIndex][colIndex - 1] === 0 || grid[rowIndex][colIndex - 1] === 2)){
      grid[rowIndex][colIndex] = -1;
      console.log(' Left');
      movement(rowIndex, colIndex - 1, zeroes + 1);
      grid[rowIndex][colIndex] = 0;      
    }

    //Right is zero
    if(colIndex + 1 < grid.length && (grid[rowIndex][colIndex+1] === 0 || grid[rowIndex][colIndex+1] === 2)){
      grid[rowIndex][colIndex] = -1;
      console.log(' Right');
      movement(rowIndex, colIndex + 1, zeroes + 1);
      grid[rowIndex][colIndex] = 0;
    }    
  }

  movement(start[0], start[1], 0);
  return count;    
};

console.log(uniquePathsIII(
  [
    [1,0,0,0],
    [0,0,0,0],
    [0,0,2,-1]
  ])); //2

// console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,0,2]])); //4