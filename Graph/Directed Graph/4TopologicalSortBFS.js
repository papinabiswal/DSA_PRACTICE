// Kahn's algorithm
class Solution {
    topoSort(V, edges) {
        const adj = new Array(V).fill(0).map(() => []);
        const indegree = new Array(V).fill(0);

        // Build adjacency list and indegree array
        for (let [u, v] of edges) {
            adj[u].push(v);     // directed edge u → v
            indegree[v]++;      // increment indegree of v
        }

        const queue = [];
        const result = [];

        // Push all nodes with indegree 0 into queue
        for (let i = 0; i < V; i++) {
            if (indegree[i] === 0) queue.push(i);
        }

        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node);

            for (let neighbor of adj[node]) {
                indegree[neighbor]--;
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }

        // Check for cycle (if topological sort isn't possible)
        if (result.length !== V) {
            return []; // or throw error / return "Cycle exists"
        }

        return result;
    }
}

const solution = new Solution();
const V = 6;
const edges = [
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1],
];

console.log(solution.topoSort(V, edges));
// Possible output: [4, 5, 2, 3, 1, 0]
