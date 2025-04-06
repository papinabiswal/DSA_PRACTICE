class Solution {
    canFinish(numCourses, prerequisites) {
        let adj = new Array(numCourses).fill(0).map(() => []);

        // Build the graph
        for (let [course, prereq] of prerequisites) {
            adj[prereq].push(course); // prereq -> course
        }

        let visited = new Set();
        let path = new Set();

        function dfs(node) {
            visited.add(node);
            path.add(node);

            for (let neighbor of adj[node]) {
                if (!visited.has(neighbor)) {
                    if (dfs(neighbor)) return true;
                } else if (path.has(neighbor)) {
                    return true; // cycle detected
                }
            }

            path.delete(node);
            return false;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!visited.has(i)) {
                if (dfs(i)) return false; // cycle found => cannot finish all courses
            }
        }

        return true; // no cycles => all courses can be completed
    }
}
