class Solution {
    findOrder(numCourses, prerequisites) {
        let adj = new Array(numCourses).fill(0).map(() => []);

        // Build adjacency list
        for (let [course, prereq] of prerequisites) {
            adj[prereq].push(course); // prereq -> course
        }

        let visited = new Set();
        let path = new Set(); // for cycle detection
        let result = []; // to store topological order

        function dfs(node) {
            visited.add(node);
            path.add(node);

            for (let neighbor of adj[node]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor)) return true; // cycle
                } else if (path.has(neighbor)) {
                    return true; // cycle
                }
            }

            path.delete(node);
            result.push(node); // post-order append
            return false;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!visited.has(i)) {
                if (dfs(i)) return []; // cycle found
            }
        }

        return result.reverse(); // reverse post-order for correct order
    }
}
