class Solution {
    topoSort(V, edges) {
        const adj = new Array(V).fill(0).map(() => []);

        // Build adjacency list
        for (let [u, v] of edges) {
            adj[u].push(v); // directed edge u → v
        }

        const visited = new Array(V).fill(false);
        const stack = [];

        const dfs = (node) => {
            visited[node] = true;

            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            }

            // Push after visiting all neighbors (postorder)
            stack.push(node);
        };

        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                dfs(i);
            }
        }

        // Reverse the stack to get the correct order
        return stack.reverse();
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
// Possible output: [5, 4, 2, 3, 1, 0]
