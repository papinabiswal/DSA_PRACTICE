var canFinish = function(numCourses, prerequisites) {
    let adj = new Array(numCourses).fill(0).map(()=>[]);
    const inDegree = new Array(numCourses).fill(0);

    for(let [course, pre] of prerequisites){
        adj[pre].push(course);
        inDegree[course]++;
    }

    const queue =[];
    let completed = 0;
    for (let i = 0; i < numCourses; i++) {
        if(inDegree[i] === 0){
            completed++;
            queue.push(i);
        }
    }
    
    while(queue.length > 0){
        let node = queue.shift();
    for (let neighbor of adj[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                completed++;
                queue.push(neighbor);
            }
        }
    }
    return completed === numCourses;
};