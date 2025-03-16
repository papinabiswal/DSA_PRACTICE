// Recursion
var maxBalancedSubsequenceSum = function(nums) {
    function solve(idx, prevIdx){
       if(idx >= nums.length) return 0;
        
        let take =0;
       if(prevIdx === -1 || (nums[idx] -idx >= nums[prevIdx]-prevIdx)){
          take = nums[idx]+solve(idx+1, idx);
       }
       let skip = solve(idx+1, prevIdx);
       return Math.max(take, skip);
    }

    let maxEL = Math.max(...nums);
    if(maxEL <= 0){
      return maxEL;
    }
    
    return solve(0,-1);
};

// Recursion +memo
var maxBalancedSubsequenceSum = function(nums) {
   let n = nums.length;
  let memo = new Array(n).fill(null).map(() => new Array(n + 1).fill(-1));
   
   function solve(idx, prevIdx){
      if(idx >= nums.length) return 0;
       
       if(memo[idx][prevIdx+1] !== -1) return memo[idx][prevIdx+1]
       let take =0;
      if(prevIdx === -1 || (nums[idx] -idx >= nums[prevIdx]-prevIdx)){
         take = nums[idx]+solve(idx+1, idx);
      }
      let skip = solve(idx+1, prevIdx);
      return memo[idx][prevIdx+1] = Math.max(take, skip);
   }

   let maxEL = Math.max(...nums);
   if(maxEL <= 0){
     return maxEL;
   }
   
   return solve(0,-1);
};

// Buttom up approach
   
