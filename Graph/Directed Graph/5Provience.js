// using DFS
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let visited = new Set();
    let provienceCount =0;

    function dfs(city){
      visited.add(city);

      for(let neighbour =0; neighbour < n; neighbour++){
            if(isConnected[city][neighbour] === 1 && !visited.has(neighbour)){
               dfs(neighbour);
            }
      }
    }
    for(let city =0; city < n; city++){
        if(!visited.has(city)){
            dfs(city);
            provienceCount++;
        }
    }
   return provienceCount;
};

// using BFS
var findCircleNum = function(isConnected) {
    let n = isConnected.length;
    let visited = new Set();
    let provienceCount =0;
    
    for(let city=0; city < n; city++){
       if(!visited.has(city)){

        const queue = [city];
        while(queue.length > 0){
          const current = queue.shift();
          visited.add(current);

          for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[current][neighbor] === 1 && !visited.has(neighbor)) {
                queue.push(neighbor);
            }
          }
        }
        provienceCount++;
       }
    }
    return provienceCount;
};