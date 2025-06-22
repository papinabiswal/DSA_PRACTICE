class PriorityQueue {
    constructor() {
      this.q = [];
    }
  
    enqueue(node, priority) {
      this.q.push({ node, priority });
      this.q.sort((a, b) => a.priority - b.priority); // min-heap behavior
    }
  
    dequeue() {
      return this.q.shift();
    }
  
    isEmpty() {
      return this.q.length === 0;
    }
  }
  
  function dijkstra(V, edges, src) {
    const adj = Array.from({ length: V }, () => []);
    for (const [u, v, wt] of edges) {
      adj[u].push([v, wt]);
      adj[v].push([u, wt]);
    }
  
    const dist = Array(V).fill(Infinity);
    dist[src] = 0;
  
    const pq = new PriorityQueue();
    pq.enqueue(src, 0); 
  
    while (!pq.isEmpty()) {  // V
      const { node } = pq.dequeue(); // log(V)
  
      for (const [neigh, weight] of adj[node]) { // E
        if (dist[node] + weight < dist[neigh]) {
          dist[neigh] = dist[node] + weight;
          pq.enqueue(neigh, dist[neigh]); // log(V)
        }
      }
    }
  
    return dist;
  }
  
  // Run the example
  const V = 3;
  const edges = [[0, 1, 1], [1, 2, 3], [0, 2, 6]];
  const src = 2;
  
  console.log(dijkstra(V, edges, src)); // Output: [4, 3, 0]

  // Time Complexity
  // V * (log(V) + E log(V));
  // Vlog(V) + VE log(V)
  