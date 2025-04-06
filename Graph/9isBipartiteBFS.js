var isBipartite = function(graph) {
    const n = graph.length;
        const color = new Array(n).fill(-1); // -1 = uncolored

        for (let i = 0; i < n; i++) {
            if (color[i] === -1) {
                let queue = [i];
                color[i] = 0; // Start coloring with 0

                while (queue.length > 0) {
                    const node = queue.shift();

                    for (let neighbor of graph[node]) {
                        if (color[neighbor] === -1) {
                            color[neighbor] = 1 - color[node]; // Alternate color
                            queue.push(neighbor);
                        } else if (color[neighbor] === color[node]) {
                            return false; // Conflict found
                        }
                    }
                }
            }
        }

        return true;
};