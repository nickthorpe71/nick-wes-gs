// Check this for dynamic programming approach to improve algorithm performance: https://codeforces.com/blog/entry/337
// Simple example for Hamiltonian Path: https://stackoverflow.com/questions/58186972/hamiltonian-path

function square_sums_row(n) {
    let result = hamiltonian(populateGraph(n), n);
    console.log('result', result);

    return graphMap;
}

function hamiltonian(vertexes, start) {
    let n = vertexes.size;
    let paths = [[start]];
    while (paths.length > 0) {
        let tempPath = [];
        for (let path of paths) {
            const nextSteps = vertexes.find(({ vertex }) => vertex == path[path.length - 1]).peers.filter(v => !path.includes(v));
            if (!nextSteps.length) continue;
            else if (path.length == n - 1) return [...path, nextSteps[0]];
            else nextSteps.forEach(step => tempPath.push([...path, step]));
        }
        paths = tempPath;
    }
}

/**
 * @param {Number} n 
 * @returns {hashMap} map containing keys 1 - n. Each value is a Node in a graph where all nodes connect to nodes that when added produce a square number.
 */
function populateGraph(n) {
    const squares = getSquares(n);
    const graphMap = createGraph(n);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (squares.includes(i + j) && j != i) {
                graphMap[i].edges.push(graphMap[j]);
            }
        }
    }

    return graphMap;
}

/**
 * @param {Number} n 
 * @returns {hashMap} map containing keys 1 - n. Each has a starting node with no edges
 */
function createGraphArr(n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr[i] = new Node(i);
    }

    return arr;
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