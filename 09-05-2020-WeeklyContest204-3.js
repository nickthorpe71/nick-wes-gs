/**
 * @param {number[][]} grid
 * @return {number}
 */

function helper (array, xIndex, yIndex) {
  console.log(xIndex,yIndex);
  let helperObject = {
    up:null,
    right:null,
    down:null,
    left:null,
  };

  //check Up
  if(yIndex-1 >= 0){
    helperObject.up = array[yIndex-1][xIndex];
  } else {
    helperObject.up = 0;
  }

  //check Right
  if(xIndex+1 <= array[yIndex].length-1){
    helperObject.right = array[yIndex][xIndex+1];
  } else {
    helperObject.right = 0;
  }

  //check Down
  if(yIndex+1 <= array.length-1){
    helperObject.down = array[yIndex+1][xIndex];
  } else {
    helperObject.down = 0;
  }

  //check Left
  if(xIndex-1 >= 0){
    helperObject.left = array[yIndex][xIndex-1];
  } else {
    helperObject.left = 0;
  }

  return helperObject;
}

var minDays = function (grid) {
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
      console.log(helper(grid,j,i));
    }
  }
  // is there any index that only has 1 neighbour
  // else 
};

const grid = [
  [1, 1, 0, 1, 1,1],
  [1, 1, 1, 1, 1,0],
  [1, 1, 0, 1, 1,1],
  [1, 1, 1, 1, 1,0]
];

const grid2 = [
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0]
];

const grid3 = [
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 1, 0]
];

console.log(minDays(grid));

