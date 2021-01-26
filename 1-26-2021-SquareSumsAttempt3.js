// revise with : https://www.youtube.com/watch?v=jGRRBJlNtwI&ab_channel=FitCoder
// need to take tests from code wars and implement them locally

let path = [];
let visited = [];
let totalVerticies = 0;

function square_sums_row(n) {
    let graph = populateGraph(n);
    totalVerticies = graph.length;
    let least = leastPeers(graph);
    least = least > 0 ? least : 1;
    let result = hamiltonian(graph, least);

    let testSequence = [...path];
    testSequence.sort(function (a, b) { return a - b; });
    for (let i = 1; i <= testSequence.length; i++)
        if (testSequence[i - 1] !== i)
            return false;

    return result ? path : false;
}

function hamiltonian(graph, start) {
    for (let i = 0; i < totalVerticies; i++)
        visited[i] = false;

    visited[start - 1] = true;
    path.push(start);

    return hamiltonianPath(graph[start - 1]);
}

function hamiltonianPath(verticy) {
    if (path.length === totalVerticies) {
        return true;
    }

    let marker = false;

    if (verticy.peers) {
        verticy.peers.forEach(peer => {
            if (visited[peer.value - 1] === false) {
                visited[peer.value - 1] = true;
                path.push(peer.value);

                if (hamiltonianPath(peer)) {
                    marker = true;
                } else {
                    visited[peer.value - 1] = false;
                    path.pop();
                }
            }
        });
    }

    return marker;
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

function createGraphArr(n) {
    let arr = [n];

    for (let i = 0; i < n; i++) {
        arr[i] = new Node(i + 1);
    }

    return arr;
}


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

console.log(square_sums_row(25));