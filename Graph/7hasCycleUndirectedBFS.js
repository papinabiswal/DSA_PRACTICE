function bfsIterative(V, edges){
    let adj = new Array(V).fill(0).map(()=> []);
    for(let [u, v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }
    let visited = new Array(V).fill(false);

    function bfs(start){
        let queue = [[start, -1]];
        visited[start] = true;
        
        while(queue.length){
           let [node, parent] = queue.shift(); 
           
           for(let neighbour of adj[node]){
               if(!visited[neighbour]){
                   visited[neighbour] = true;
                   queue.push([neighbour, node])
               } else if(parent !== neighbour){
                   return true;
               }
           }
        }
        return false;
    }
    
    for(let i=0; i< V; i++){
        if(!visited[i]){
            if(bfs(i)) return true;
        }
    }
    return false;
}

let V1 = 6;
let edges1 = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 1]
];
bfsIterative(V1, edges1);
