// using DFS
// TC: O(V^2) SC: O(V)
function findCircleNum(isConnected) {
  const V = isConnected.length;
  const visited = new Array(V).fill(false);
  let provinceCount = 0;

  function dfs(node) {
      visited[node] = true;

      for (let neighbor = 0; neighbor < V; neighbor++) {
          if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
              dfs(neighbor);
          }
      }
  }

  for (let i = 0; i < V; i++) {
      if (!visited[i]) {
          provinceCount++;
          dfs(i); // Traverse all connected nodes (1 province)
      }
  }

  return provinceCount;
}


// using BFS
var findCircleNum = function(isConnected) {
  let V = isConnected.length;
  let visited = new Array(V).fill(false);

  let provinces = 0;
  

  function bfs(start){
      visited[start] = true;
      let queue = [start];

      while(queue.length){
         const node = queue.shift();
         for(let neighbour =0; neighbour < V; neighbour++){
          if(!visited[neighbour] && isConnected[node][neighbour]){
              visited[neighbour] = true; 
              queue.push(neighbour);
          }
        }
      }
  }

  for(let i= 0; i < V; i++){
      if(!visited[i]){
          bfs(i);
          provinces++;
      }
  }
  return provinces;
};