function bfs(graph, start){
    let queue = [start];
    let visited = new Set();
    visited.add(start);

    while(queue.length > 0){
       let node = queue.shift();
       console.log(node);

       for(let neighbour of graph.adjancyList[node]){
           if(!visited.has(neighbour)){
            visited.add(neighbour);
            queue.push(neighbour);
           }
       }
    }
}
bfs(graph, "A")