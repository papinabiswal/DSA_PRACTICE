function dfsIterative(graph, start){
    let stack = [start];
    let visited = new Set();
    visited.add(start);

    while(stack.length > 0){
        let node = stack.pop();
        console.log(node);
        for(let neighbour of graph.adjancyList[node]){
            if(!visited.has(neighbour)){
                visited.add(neighbour);
                stack.push(neighbour);
            }
        }
    }
}
dfsIterative(graph, "A");