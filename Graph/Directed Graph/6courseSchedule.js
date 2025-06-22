function canFinish(numCourses, prerequisites) {
    // Step 1: Build adjacency list and in-degree array
    let adj = new Array(numCourses).fill(0).map(()=>[]);
    const inDegree = new Array(numCourses).fill(0);

    for (const [a, b] of prerequisites) {
        adj[b].push(a);        // b → a (you must take b before a)
        inDegree[a]++;         // a has one more prerequisite
    }

    // Step 2: Queue for courses with in-degree 0 (no prerequisites)
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    // Step 3: BFS
    let count = 0;
    while (queue.length) {
        const course = queue.shift();
        count++;

        for (const neighbor of adj[course]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Step 4: Check if all courses are completed
    return count === numCourses;
}
