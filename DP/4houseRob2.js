// this is same houseRobber1
// but here 1st and last home is connected
// so the new array will be either from 0 to n-2
// or from 0 to n-1
// Recursion
function robLinear(nums, start, end){
    if(start > end) return 0;

    let take = nums[start] + robLinear(nums, start+2, end);
    let skip = robLinear(nums, start+1, end);

    return Math.max(take, skip);

}
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    return Math.max(
        robLinear(nums, 0, nums.length-2), // exclude the last one
        robLinear(nums, 1, nums.length-1) // exclude the first house
    )
};

// recursion + memo

function robLinear(nums, start, end, memo){
    if(start > end) return 0;
    if(start in memo) return memo[start];

    let take = nums[start] + robLinear(nums, start+2, end, memo);
    let skip = robLinear(nums, start+1, end, memo);

    memo[start] = Math.max(take, skip);
    return memo[start];
}
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    return Math.max(
        robLinear(nums, 0, nums.length-2, {}), // exclude the last one
        robLinear(nums, 1, nums.length-1, {}) // exclude the first house
    )
};

// Buttom up approach

function robLinear(nums){
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

     for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    
    return dp[nums.length - 1];
}
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    return Math.max(
        robLinear(nums.slice(0, nums.length-1)), // exclude the last one
        robLinear(nums.slice(1)) // exclude the first house
    )
};

// constant time
function robLinear(nums){
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    let prev2 = 0, prev1 = 0;
    
    for (let num of nums) {
        let curr = Math.max(num + prev2, prev1);
        prev2 = prev1;
        prev1 = curr;
    }
    
    return prev1;
}
var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];

    return Math.max(
        robLinear(nums.slice(0, nums.length-1)), // exclude the last one
        robLinear(nums.slice(1)) // exclude the first house
    )
};