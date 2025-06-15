// Start from a node.
// Use a stack (LIFO order) or recursion.
// Move deep into a branch before backtracking.

class Graph {
    constructor(){
        this.adjancyList = {};
    }

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
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

function dfsRecursive(graph, start, visited=new Set()){
    if(visited.has(start)) return;
    console.log(start);
    visited.add(start);

    for(let neighbour of graph.adjancyList[start]){
        dfsRecursive(graph, neighbour, visited);
    }
}
dfsRecursive(graph, "A");
// "A","B","D","C","E"
//     A
//    / \
//   B   C
//   |   |
//   D   E

// https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1

 function dfsRecursive(V, edges){
    let adj = new Array(V).fill(0).map(()=> []);
    for(let [u, v] of edges){
        adj[u].push(v);
        adj[v].push(u);
    }
    let visited = new Array(V).fill(false);

    function dfs(start){
        visited[start] = true;
        console.log(start);
        for(let neighbour of adj[start]){
            if(!visited[neighbour]){
                dfs(neighbour);
            } 
        }
    }
    for(let i=0; i<V; i++){
        if(!visited[i]){
            dfs(i);
        }
    }
}

let V1 = 6;
let edges1 = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5]
];
dfsRecursive(V1, edges1);
