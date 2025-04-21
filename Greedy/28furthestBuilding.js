// recursion
var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length;

    function helper(idx, bricks, ladders){
       if(idx === n-1) return 0;

       if(heights[idx] >= heights[idx+1]){
         return 1 + helper(idx+1, bricks, ladders)
       }  else {
           let byBricks =0;
           let byLadder =0;

           let diff = heights[idx+1] -heights[idx];
           if(bricks >= diff){
              byBricks = 1+helper(idx+1, bricks-diff, ladders)
           }
           if (ladders > 0) {
                byLadder = 1 + helper(idx + 1, bricks, ladders - 1);
            }
            return Math.max(byBricks, byLadder);
       }
    }
    return helper(0,bricks, ladders);
};

// 