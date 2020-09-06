/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function (grid) {
  // is there any index that only has 1 neighbour
  // else 
};

const grid = [
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1]
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

