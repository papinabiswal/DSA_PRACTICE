
class Solution {
    isCycle(V, edges){
        let adj = new Array(V).fill(0).map(()=>[]);

        for(let [u, v] of edges){
           adj[u].push(v);
        }

        let visited = new Set();
        let path = new Set();

        function dfs(node){
           visited.add(node);
           path.add(node);

           for(let neighbour of adj[node]){
               if(!visited.has(neighbour)){
                   if(dfs(neighbour)) return true;
               } else if(path.has(neighbour)){
                   return true;
               }
           }
           path.delete(node);
           return false;
        }
        for(let i=0; i< V; i++){
            if(!visited.has(i)){
                if(dfs(i)) return true;
            }
        }
        return false;
    }
}

const solution = new Solution();
const V = 4;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 1], // creates a cycle
];
console.log(solution.isCycle(V, edges)); // true
