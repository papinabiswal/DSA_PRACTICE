var numTilePossibilities = function(tiles) {
    let used = new Array(tiles.length).fill(false);
    let result = new Set();
 
    function backtrack(curr){
      result.add(curr);
      
      for(let i=0; i<tiles.length; i++){
         if (used[i]) continue;
 
          curr += tiles[i];
          used[i] = true;
          backtrack(curr);
          used[i] = false;
          curr = curr.slice(0,-1);
      }
    } 
    backtrack("");
    return reult.size-1;
 };

 // Alternate way

 var numTilePossibilities = function(tiles) {
    let total =0;
    let count = new Array(26).fill(0);
 
    for(let c of tiles){
     count[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
 
    function backtrack(count){
       total++;
 
       for(let i=0; i< 26; i++){
            if(count[i] === 0){
             continue;
            }
            count[i]--  // used
             backtrack(count);
             count[i]++
       }
    }
    backtrack(count);
    return total-1;
 };