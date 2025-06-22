class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight){
        if(!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if(!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
    }
    
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);

// **********************************************************************************************************************************************************
class PriorityQueue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b)=> a.priority - b.priority);
    }
}

let q = new PriorityQueue();
q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);
