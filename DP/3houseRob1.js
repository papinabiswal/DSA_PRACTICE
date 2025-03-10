// Recursion

var rob = function(nums, i=0) {
    if(i >= nums.length) return 0;
    let take = nums[i] + rob(nums, i+2);
    let skip = rob(nums, i+1);
    return Math.max(take, skip);
};
houseRob([1,2,3,1]);

// Recursion + memo

var rob = function(nums, i=0, memo={}) {
    if(i >= nums.length) return 0;
    if(i in memo) return memo[i]
    let take = nums[i] + rob(nums, i+2, memo);
    let skip = rob(nums, i+1, memo);
    memo[i] = Math.max(take, skip);
    return memo[i];
};

// Buttom up approach

var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    let dp = new Array(nums.length+1);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for(let i=2; i< nums.length; i++){
       let take = nums[i] + dp[i-2]
        let skip = dp[i-1];

        dp[i] = Math.max(take, skip);
    }
   return dp[nums.length-1];
};

// constance space

var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    let prev2 = nums[0]; 
    let prev1 = Math.max(nums[0], nums[1]);

    for(let i=2; i< nums.length; i++){
        let take = nums[i] + prev2;
        let skip = prev1;
        let temp = Math.max(take, skip);
        prev2 = prev1;
        prev1 = temp;
    }
    return prev1;
};