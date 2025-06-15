function bfsIterative(V, edges){
    let adj = new Array(V).fill(0).map(()=> []);
    for(let [u, v] of edges){
        adj[u].push(v);
        adj[v].push(u); // as it's undirected graph
    }
    let visited = new Array(V).fill(false);

    let result =[];
    let queue =[0];
    visited[0] = true;
    
    while(queue.length){
        let start = queue.shift();
        result.push(start);
        
        for(let neighbour of adj[start]){
            if(!visited[neighbour]){
                visited[neighbour] = true;
                queue.push(neighbour)
            }
        }
    }
   return result;
}

let V1 = 6;
let edges1 = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5]
];
bfsIterative(V1, edges1);