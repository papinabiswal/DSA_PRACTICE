// Maximum Alternating Subsequence Sum
// Recursion
// O(2ⁿ) (Exponential) → Since we make two choices (take or skip) at each step, there are 2ⁿ recursive calls.
// O(n) (Linear) → Due to the recursive call stack depth of n.
function helper(nums, idx, isEven){
    if(idx >= nums.length) return 0;

    let skip = helper(nums, idx+1, isEven);
    let take = (isEven ? nums[idx] : -nums[idx]) + helper(nums, idx+1, !isEven);

    return Math.max(take, skip);
}
var maxAlternatingSum = function(nums) {
    return helper(nums, 0, true);
};
maxAlternatingSum([4,2,5,3]);

// recursion + memo
function helper(nums, idx, isEven, memo){
    if(idx >= nums.length) return 0;

    let key = idx + "-" + isEven;
    if(key in memo) return memo[key];
    
    let skip = helper(nums, idx+1, isEven, memo);
    let take = (isEven ? nums[idx] : -nums[idx]) + helper(nums, idx+1, !isEven, memo);

    memo[key] = Math.max(take, skip);
    return memo[key];
}
var maxAlternatingSum = function(nums) {
    return helper(nums, 0, true, {});
};

// Dynamic Approach
// it's 2d because here two variable is changing
// one is index and and the other one is  isEven(0-> even, 1-> odd)
// if we try to find dp[i][even] = dp[i-1][odd] - nums[i] -> i-1 will be the prev length, and the length will be odd
// - nums[i] because the index will be odd
// i will start from 1 else if we start from 0 , d[i-1] will be out of bound
var maxAlternatingSum = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0).map(() => Array(2).fill(0));
     
     dp[0][0] = nums[0]; // take for 1st even value
     dp[0][1] = 0;       // not take even value, so the alternate sum is 0

    for(let i=1; i< n; i++){
        dp[i][0] = Math.max(dp[i-1][1] + nums[i], dp[i-1][0]);
        dp[i][1] = Math.max(dp[i-1][0] - nums[i], dp[i-1][1]);
    }
    return Math.max(dp[n-1][0], dp[n-1][1]);
}

// constant time approach
var maxAlternatingSum = function(nums) {
    let even = nums[0], odd = 0;

    for (let i = 1; i < nums.length; i++) {
        even = Math.max(even, odd + nums[i]);
        odd = Math.max(odd, even - nums[i]);
    }

    return even;
};