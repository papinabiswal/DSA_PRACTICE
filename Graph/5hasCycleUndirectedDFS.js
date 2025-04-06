function dfsRecursive(V, edges){
    let adj = new Array(V).fill(0).map(()=>[]);
     
    for(let [u,v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }
     let visited = new Array(V).fill(false);
 
     function dfs(start, parent){
         visited[start] = true;
         for(let neighbour of adj[start]){
             if(!visited[neighbour]){
                 if(dfs(neighbour, start)) return true;
             } else if(neighbour !== parent){
                 return true;
             }
         }
         return false;
     }
     for(let i=0; i< V; i++){
         if(!visited[i]){
             if(dfs(i, -1)) return true;
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
 dfsRecursive(V1, edges1);