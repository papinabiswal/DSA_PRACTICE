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
   
var maxBalancedSubsequenceSum = function(nums) {
   let n = nums.length;
  
      let maxEl = Math.max(...nums);
      if(maxEl <= 0){
          return maxEl;
      }
  
     let dp = new Array(n).fill(0);
      for(let i=0; i < n; i++){
          dp[i] = nums[i];
      }
  
      let maxSum = 0;
  
      for(let i=0; i < n; i++){
         for(let j=0; j< i; j++){
             if(nums[i] -i >= nums[j] - j){
                 dp[i] = Math.max(dp[i], nums[i]+dp[j]);
                 maxSum = Math.max(dp[i], maxSum);
             }
         } 
      }
      return maxSum > maxEl ? maxSum : maxEl; 
  };

  // Binary search approach
  // O(nlogn)

  var maxBalancedSubsequenceSum = function(nums) {
   const n = nums.length;
  
      // Step 1: Create an array where each element is nums[i] - i
      const transformed = new Array(n);
      for (let i = 0; i < n; i++) {
          transformed[i] = nums[i] - i;
      }
  
      // Step 2: Setup two arrays to track:
      // - xValues: the transformed values in increasing order
      // - dpValues: the maximum sum we can achieve ending at each xValue
      const xValues = [];
      const dpValues = [];
  
      for (let i = 0; i < n; i++) {
          const x = transformed[i];
  
          // Find the largest index in xValues where value <= x
          const idx = binarySearch(xValues, x);
  
          let currentDp;
          if (idx === -1) {
              // No previous element can be paired, start new subsequence
              currentDp = nums[i];
          } else {
              // Either take current alone or add to the best previous subsequence
              currentDp = Math.max(nums[i], nums[i] + dpValues[idx]);
          }
  
          // Remove worse subsequences (their dpValue <= currentDp)
          let removeCount = 0;
          for (let j = idx + 1; j < xValues.length; j++) {
              if (dpValues[j] <= currentDp) {
                  removeCount++;
              } else {
                  break;
              }
          }
  
          // Insert the new (x, currentDp) into xValues and dpValues
          xValues.splice(idx + 1, removeCount, x);
          dpValues.splice(idx + 1, removeCount, currentDp);
      }
  
      // Step 3: The answer is the largest dpValue
      return dpValues[dpValues.length - 1];
  
      // Helper function: Binary search
      function binarySearch(arr, target) {
          // Find the last index where arr[i] <= target
          let low = 0;
          let high = arr.length - 1;
          let result = -1;
  
          while (low <= high) {
              const mid = Math.floor((low + high) / 2);
              if (arr[mid] <= target) {
                  result = mid;
                  low = mid + 1;
              } else {
                  high = mid - 1;
              }
          }
  
          return result;
      }
  };