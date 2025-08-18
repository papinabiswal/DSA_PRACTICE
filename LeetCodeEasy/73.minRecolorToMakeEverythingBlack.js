var minimumRecolors = function(blocks, k) {
   let i =0, j =0;
   let n = blocks.length;
   let W = 0;
   let minRecolor = k;

   while(j < blocks.length){
      if(blocks[j] === 'W') {
         W++;
      }
      if(j-i+1 === k){
         minRecolor = Math.min(minRecolor, W);
         if(blocks[i] === 'W'){
            W--;
         }
         i++;
      }
      j++;
   } 
   return minRecolor
};