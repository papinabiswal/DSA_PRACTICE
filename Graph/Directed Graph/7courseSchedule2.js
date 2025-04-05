var findOrder = function(numCourses, prerequisites) {
    let adj = new Array(numCourses).fill(0).map(()=>[]);
    let inDegree = new Array(numCourses).fill(0);
    let result =[];
    
    for(let [course, pre] of prerequisites){
        adj[pre].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for(let i=0; i< numCourses; i++){
        if(inDegree[i] === 0) queue.push(i);
    }

    while(queue.length > 0){
       let node = queue.shift();
       result.push(node);
       
       for(let neighbour of adj[node]){
          inDegree[neighbour]--;
          if(inDegree[neighbour] === 0){
            queue.push(neighbour);
          }
       }
    }
    return result.length === numCourses ? result : [];
};