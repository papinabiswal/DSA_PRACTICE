var isBipartite = function(graph) {
    const V = graph.length;
    const color = new Array(V).fill(-1); // -1 means unvisited

    function bfs(start) {
        const queue = [start];
        color[start] = 0; // Start with color 0

        while (queue.length > 0) {
            const node = queue.shift();

            for (const neighbor of graph[node]) {
                if (color[neighbor] === -1) {
                    // Assign opposite color to the neighbor
                    color[neighbor] = 1 - color[node];
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    // Conflict detected → not bipartite
                    return false;
                }
            }
        }

        return true;
    }

    // Handle disconnected components
    for (let i = 0; i < V; i++) {
        if (color[i] === -1) {
            if (!bfs(i)) return false;
        }
    }

    return true;
};