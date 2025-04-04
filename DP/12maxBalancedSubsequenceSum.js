// Recursion
var maxBalancedSubsequenceSum = function(nums) {
    function solve(idx, prevIdx){
        if(idx >= nums.length) {
            return prevIdx === -1 ? -Infinity : 0;   // handle for -ve input
        }
         
        let take = -Infinity;
        if(prevIdx === -1 || (nums[idx] - nums[prevIdx] >= idx - prevIdx)){
            take = nums[idx] + solve(idx+1, idx);
        } 

        let skip = solve(idx+1, prevIdx);

        return Math.max(take, skip);
    }
    let result = solve(0, -1);
    return result === -Infinity ? Math.max(...nums) : result; // handle for -ve input
};

// recursion + memo
var maxBalancedSubsequenceSum = function(nums) {
    let n = nums.length;
    const memo = new Array(n).fill().map(() => new Array(n + 2).fill(null));

    function solve(idx, prevIdx){
        if(idx >= nums.length) {
            return prevIdx === -1 ? -Infinity : 0;
        }

        if (memo[idx][prevIdx + 1] !== null) {
            return memo[idx][prevIdx + 1];
        }
         
        let take = -Infinity;
        if(prevIdx === -1 || (nums[idx] - nums[prevIdx] >= idx - prevIdx)){
            take = nums[idx] + solve(idx+1, idx);
        } 

        let skip = solve(idx+1, prevIdx);

        memo[idx][prevIdx + 1] = Math.max(take, skip);

        return memo[idx][prevIdx + 1];
    }
    let result = solve(0, -1);
    return result === -Infinity ? Math.max(...nums) : result;
};

// Buttom up pproach
var maxBalancedSubsequenceSum = function(nums) {
    const n = nums.length;
     const dp = new Array(n).fill(0);
     let maxSum = -Infinity;
 
     for (let i = 0; i < n; i++) {
         dp[i] = nums[i]; // Initialize with the current number itself
         for (let j = 0; j < i; j++) {
             if (nums[i] - nums[j] >= i - j) {
                 dp[i] = Math.max(dp[i], dp[j] + nums[i]);
             }
         }
         maxSum = Math.max(maxSum, dp[i]);
     }
 
     return maxSum;
 };

 // will check with fenwick tree