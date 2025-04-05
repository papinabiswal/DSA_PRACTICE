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
