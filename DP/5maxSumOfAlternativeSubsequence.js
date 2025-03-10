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
var maxAlternatingSum = function(nums) {
    let n = nums.length;
    
    let dp = new Array(n).fill(0).map(()=> Array(2).fill(0));

    dp[0][0] = Math.max(-nums[0], 0);
    dp[0][1] = Math.max(nums[0], 0);

    for(let i=1; i< n; i++){
        dp[i][0] = Math.max(dp[i-1][1] - nums[i], dp[i-1][0]);
        dp[i][1] = Math.max(dp[i-1][0] + nums[i], dp[i-1][1])
    }
    return Math.max(dp[n-1][0], dp[n-1][1]);
}

// constant time approach
var maxAlternatingSum = function(nums) {
    let even = Math.max(nums[0], 0), odd = Math.max(-nums[0], 0);

    for (let i = 1; i < nums.length; i++) {
        let newEven = Math.max(odd + nums[i], even);
        let newOdd = Math.max(even - nums[i], odd);

        even = newEven;
        odd = newOdd;
    }

    return even;
};