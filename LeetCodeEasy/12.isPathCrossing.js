var isPathCrossing = function(path) {
  let visited = new Set();
  let x = y = 0;
  
  visited.add("0,0");

  for(let direction of path){
      if(direction === 'E'){
         x++;
      } else if(direction === 'W'){
         x--;
      } else if(direction === 'N'){
         y++;
      } else if(direction === 'S'){
         y--;
      }

      let key = `${x},${y}`;
      if(visited.has(key)){
         return true;
      }
      visited.add(key);
  }
  return false;
};