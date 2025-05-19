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

// Lazy Greedy Approach

// - Track climbs where you go up using MinHeap
// - Use ladders greedily (just push into heap)
// - When you exceed ladder count, replace the smallest climb with bricks
// - If bricks < 0 → can't continue, return current index
// - If all done, return last index
var furthestBuilding = function(heights, bricks, ladders) {

  const heap = new MinHeap();

  for (let i = 0; i < heights.length - 1; i++) {
      let diff = heights[i + 1] - heights[i];

      if (diff > 0) {
          heap.push(diff);  // try to use ladder (we’ll replace with bricks if needed)

          // If we've used more ladders than allowed, use bricks for the smallest jump
          if (heap.size() > ladders) {
              bricks -= heap.pop();
              if (bricks < 0) return i; // not enough bricks
          }
      }
  }

  return heights.length - 1;
};