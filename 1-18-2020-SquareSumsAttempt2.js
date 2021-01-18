

function square_sums_row(n) {
    const squares = getSquares(n);
    const graphMap = createGraph(n);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (squares.includes(i + j) && j != i) {
                graphMap.get(i).edges.push(graphMap.get(j));
            }
        }
    }

    return graphMap;
}

/**
 * @param {Number} n 
 * @returns {hashMap} map containing keys 1 - n. Each has a starting node with no edges
 */
function createGraph(n) {
    let map = new Map();

    for (let i = 1; i <= n; i++) {
        map.set(i, new Node(i));
    }

    return map;
}

/**
 * @param {Number} n 
 * @returns {Array} array of all squares that fall within n + n
 */
function getSquares(n) {
    const arr = [];
    let i = 0;

    do {
        i++;
        arr.push(i * i);
    } while (i * i < n + n);

    return arr;
}

class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }

    addEdge(node) {
        edges.push(node);
    }
}

console.log(square_sums_row(15));