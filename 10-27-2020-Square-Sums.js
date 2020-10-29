import Graph from './DataStructures/Graph.js';

function square_sums_row(n) {
  let graph = {};
  let possibilities = [];

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let num = Math.sqrt(i + j);
      let result = (num - Math.floor(num)) === 0;

      if (result && num !== 1 && i !== j)
        graph[i].push(j);
    }
  }

  console.log(graph);

  //check if any nodes do not connect
  for (let i = 1; i <= n; i++) {

    if (graph[i].length <= 0)
      return false;
  }

  return true;
}

console.log(square_sums_row(15));

// console.log(square_sums_row(15));
// console.log('_________________________________');
// console.log(square_sums_row(16));
// console.log('_________________________________');
// console.log(square_sums_row(17));
// console.log('_________________________________');
// console.log(square_sums_row(18));
// console.log('_________________________________');
// console.log(square_sums_row(19));
// console.log('_________________________________');
// console.log(square_sums_row(20));
// console.log('_________________________________');
// console.log(square_sums_row(21));
// console.log('_________________________________');
// console.log(square_sums_row(22));
// console.log('_________________________________');
console.log(square_sums_row(54));
console.log('_________________________________');