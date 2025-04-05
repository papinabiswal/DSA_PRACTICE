
class Solution {
    isCycle(V, edges){
        let adj = new Array(V).fill(0).map(()=>[]);

        for(let [u, v] of edges){
           adj[u].push(v);
        }

        let visited = new Set();
        let path = new Set();

        for(let i=0; i< V; i++){
            if(!visited.has(i)){
               
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