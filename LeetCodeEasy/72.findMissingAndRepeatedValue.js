var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let N = n *n;
    let freq = {};

    for(let i=0; i< grid.length; i++){
       for(let j=0; j < n; j++){
            let val = grid[i][j];
            freq[val] = (freq[val] || 0) + 1;
       }
    }

   let a = -1;  // repeated
   let b = -1;  // missing
   for(let num = 1; num <= N; num++){
       if(!freq[num]){
           b = num;
       } else if(freq[num] === 2){
           a = num;
       }

       if(a !== -1 && b !== -1){
           break;
       }
   }
   return [a,b];
};

// mathmatical needs to do with O(1) space