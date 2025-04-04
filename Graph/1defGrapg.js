class Graph {
    constructor(){
        this.adjancyList = {};
    }

    // add vertex
    addVertex(vertex){
        if(!this.adjancyList[vertex]){
            this.adjancyList[vertex] = [];
        }
    }

    // add edge
    addEdge(vertex1, vertex2, isDirected=false){
        if(!this.adjancyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjancyList[vertex2]) this.addVertex(vertex2);

        this.adjancyList[vertex1].push(vertex2);
        if(!isDirected){
         this.adjancyList[vertex2].push(vertex1);
        }
        
    }

    removeEdge(vertex1, vertex2){
        if(this.adjancyList[vertex1]){
            this.adjancyList[vertex1] = this.adjancyList[vertex1].filter(v => v !== vertex2);
        }  
         if(this.adjancyList[vertex2]){
            this.adjancyList[vertex2] = this.adjancyList[vertex2].filter(v => v !== vertex1);
        } 
     }
 
     removeVertex(vertex){
         // Remove edges associated with the vertex
         while(this.adjancyList[vertex].length){
             const adjacentVertex = this.adjancyList[vertex].pop();
             this.removeEdge(vertex, adjacentVertex);
         }
         // Delete the vertex itself
         delete this.adjancyList[vertex];
     }

    // print graph
    printGraph() {
        for(let vertex in this.adjancyList){
           console.log(vertex, ":", this.adjancyList[vertex]) 
        }
    }
    
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
graph.addEdge("A", "C", true);