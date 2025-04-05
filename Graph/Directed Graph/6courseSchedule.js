var canFinish = function(numCourses, prerequisites) {
    let adj = new Array(numCourses).fill(0).map(()=>[]);
    const inDegree = new Array(numCourses).fill(0);

    for(let [course, pre] of prerequisites){
        adj[pre].push(course);
        inDegree[course]++;
    }

    const queue =[];
    for (let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0){
            queue.push(i);
        }
    }
    let completed = 0;
    while(queue.length > 0){
        let node = queue.shift();
        completed++;
    for (let neighbor of adj[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    return completed === numCourses;
};