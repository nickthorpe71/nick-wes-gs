const main = (n) => {
  const maxSquare = 2 * n + 1;
  const perfectSquares = [];
  let count = 2;

  while (Math.pow(count, 2) < maxSquare) {
    perfectSquares.push(Math.pow(count, 2));
    count++;
  }

  let graph = [];

  for (let i = 1; i < n + 1; i++) {
    graph.push(new _GraphNode(i));
  }

  let start;

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < perfectSquares.length; k++) {
      if (perfectSquares[k] - j - 1 > 0 && perfectSquares[k] - j - 1 !== j + 1 && perfectSquares[k] - j - 1 <= n)
        graph[j].complements.push(graph[perfectSquares[k] - j - 2]);
    }

    if (graph[j].complements.length === 1)
      start = graph[j].value;
  }


  console.log(graph);
};

class _GraphNode {
  constructor(value) {
    this.value = value;
    this.complements = [];
  }
}



main(15);