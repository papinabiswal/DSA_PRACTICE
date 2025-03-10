// Recursion
var climbStairs = function(n, ) {
    if(n <= 1) return 1;

    return climbStairs(n-1) + climbStairs(n-2);
};

// Recursion + memoization

var climbStairs = function(n, memo={}) {
    if(n in memo) return memo[n]
    if(n <= 1) return 1;

    memo[n] = climbStairs(n-1) + climbStairs(n-2);
    return memo[n];
};

// Buttom Up
var climbStairs = function(n) {
    if(n <= 1) return 1;
    let dp = new Array(n+1);
     
     dp[0] =1;
     dp[1] = 1;

     for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
     }
     return dp[n];
};

// constant tc
var climbStairs = function(n) {
    if(n <= 1) return 1;
    let prev2 = 1; prev1 =1;

    for(let i=2; i<=n; i++){
       let curr = prev2 + prev1;
       prev2 = prev1;
       prev1 = curr;
    }
    return prev1;
};