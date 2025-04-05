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
                let queue = [[i, -1]];

                while (queue.length > 0) {
                    let [node, parent] = queue.shift();

                    visited.add(node);

                    for (let neighbour of adj[node]) {
                        if (!visited.has(neighbour)) {
                            queue.push([neighbour, node]);
                        } else if (neighbour !== parent) {
                            // already visited and not parent → cycle
                            return true;
                        }
                    }
                }
            }
        }

        return false;
    }
}
