class Solution {
    isCycle(V, edges) {
        let adj = new Array(V).fill(0).map(() => []);

        // Build adjacency list
        for (let [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        let visited = new Set();

        for (let i = 0; i < V; i++) {
            if (!visited.has(i)) {
                let stack = [[i, -1]];

                while (stack.length > 0) {
                    let [node, parent] = stack.pop();

                    if (visited.has(node)) continue;

                    visited.add(node);

                    for (let neighbour of adj[node]) {
                        if (!visited.has(neighbour)) {
                            stack.push([neighbour, node]);
                        } else if (neighbour !== parent) {
                            // Cycle detected
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }
}
