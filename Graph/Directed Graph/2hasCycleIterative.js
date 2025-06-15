
function hasCycleDirectedBFS(V, edges) {
    // Step 1: Build adjacency list and in-degree array
    const adj = Array.from({ length: V }, () => []);
    const inDegree = new Array(V).fill(0);

    for (let [u, v] of edges) {
        adj[u].push(v);   // Directed edge from u -> v
        inDegree[v]++;    // Increment in-degree of v
    }

    // Step 2: Initialize queue with nodes having in-degree 0
    const queue = [];
    for (let i = 0; i < V; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    // Step 3: Process nodes using BFS
    let visitedCount = 0;

    while (queue.length > 0) {
        const node = queue.shift();
        visitedCount++;

        for (let neighbor of adj[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Step 4: If visited all nodes, no cycle; otherwise, cycle exists
    return visitedCount !== V;
}


const solution = new Solution();
const V = 4;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 1], // creates a cycle
];
console.log(solution.isCycle(V, edges)); // true