import Graph from './DataStructures/Graph.js';

function square_sums_row(n) {
  let graph = new Graph;

  for (let i = 0; i < n.length; i++) {
    graph.addVertex(n[i]);
  }

  for (let i = 0; i < n.length - 1; i++) {
    graph.addEdge(n[i], n[i + 1]);
  }

  console.log(graph);
  console.log(graph.nodes);
  console.log(graph.nodes.get(1));

  return false;
}

square_sums_row([1, 2, 3, 4]);

// use graph to add all numbers and connect them to their pairs that could equal squared number
// to check just add the number to each other number and check that the square root is a whole number
// once the gaph is complete find a hamiltonian path throught the graph

// likely ging to use a graph and link each squarable combo to its possible pairs

// to produce the final list it seems that breadth first search (BFS) might be most appropriate