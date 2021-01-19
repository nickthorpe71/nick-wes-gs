// Check this for dynamic programming approach to improve algorithm performance: https://codeforces.com/blog/entry/337
// Simple example for Hamiltonian Path: https://stackoverflow.com/questions/58186972/hamiltonian-path

function square_sums_row(n) {
    let graph = populateGraph(n);
    let result = hamiltonian(graph, leastPeers(graph));

    return result.length > 0 ? result : false;
}

function hamiltonian(vertexes, start) {
    let n = vertexes.length;
    let paths = [[start]];
    while (paths.length > 0) {
        let tempPath = [];
        for (let path of paths) {
            const next = vertexes.find(node => node.value == path[path.length - 1]);
            let nextSteps = [];
            if (next) {
                nextSteps = next.peers.filter(v => !path.includes(v.value));
            }
            if (!nextSteps.length) continue;
            else if (path.length == n - 1) return [...path, nextSteps[0].value];
            else nextSteps.forEach(step => tempPath.push([...path, step.value]));
        }
        paths = tempPath;
    }
    return paths;
}

function leastPeers(graphArr) {
    let lowest = 10000;
    let selected = 0;
    for (let node of graphArr) {
        if (node.peers.length > 0 && node.peers.length < lowest) {
            lowest = node.peers.length;
            selected = node.value;
        }
    }
    return selected;
}

/**
 * @param {Number} n 
 * @returns {hashMap} map containing keys 1 - n. Each value is a Node in a graph where all nodes connect to nodes that when added produce a square number.
 */
function populateGraph(n) {
    const squares = getSquares(n);
    const graphArr = createGraphArr(n);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (squares.includes(i + j) && j != i) {
                graphArr[i - 1].peers.push(graphArr[j - 1]);
            }
        }
    }

    return graphArr;
}

/**
 * @param {Number} n 
 * @returns {hashMap} map containing keys 1 - n. Each has a starting node with no peers
 */
function createGraphArr(n) {
    let arr = [n];

    for (let i = 0; i < n; i++) {
        arr[i] = new Node(i + 1);
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
        this.peers = [];
    }

    addEdge(node) {
        peers.push(node);
    }
}

console.log(square_sums_row(9));