// https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1
function isCyclicDirected(V, edges){
    let adj = new Array(V).fill(0).map(()=>[]);
    for(let [u,v] of edges){
       adj[u].push(v);
    }
    let visited = new Array(V).fill(false);
    let path = new Array(V).fill(false);
 
    function dfs(start){
      visited[start] = true; 
      path[start] = true;
 
       for(let neighbour of adj[start]){
          if(!visited[neighbour]){
             if(dfs(neighbour)) return true;
          } else if(path[neighbour]){
             return true;
          }
       }
       path[start] = false;
       return false;
    }
    for(let i=0; i< V; i++){
       if(!visited[i]){
          if(dfs(i)) return true;
       }
    }
    return false;
 }
 
 let V1 = 6;
 let edges1 = [
     [0, 1],
     [1, 2],
     [2, 3],
     [3, 1] // This creates a cycle: 1 → 2 → 3 → 1
 ];
 isCyclicDirected(V1, edges1);