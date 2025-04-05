// recursive approach
class Graph {
    constructor(){
        this.adjancyList = {};
    }

    //
    addVertex(vertex){
        if(!this.adjancyList[vertex]){
            this.adjancyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, isDirected=false){
        if(!this.adjancyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjancyList[vertex2]) this.addVertex(vertex2);

        this.adjancyList[vertex1].push(vertex2);
        if(!isDirected){
         this.adjancyList[vertex2].push(vertex1);
        }
        
    }

    hasCycleUndirected(){
        const visited = new Set();

        const dfs = (node, parent)=>{
            visited.add(node);

            for(let neighbour of graph.adjancyList[node]){
                if(!visited.has(neighbour)){
                    if(dfs(neighbour, node)) return true;
                } else {
                    if(neighbour !== parent){
                        return true;
                    }
                }
            }
            return false;
        }
        for(let vertex in this.adjancyList){
            if(!visited.has(vertex)){
                // The -1 means: you didn’t come from anywhere (because this is your first plant in the new section).
               // If any DFS finds a cycle (true), return true right away.
                if(dfs(vertex, -1)) return true;
            }
        }
        return false;
    }
    
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");
graph.addEdge("D", "E");

class Solution {
    isCycle(V, edges) {
        let adj = new Array(V).fill(0).map(()=> []);
        
        // build edge
        for(let [u, v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        
        let visited = new Set();
        
        const dfs = (start, parent)=>{
            visited.add(start);
            
            for(let neighbour of adj[start]){
                if(!visited.has(neighbour)){
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
}
