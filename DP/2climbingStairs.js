// Recursion
var climbStairs = function(n, ) {
    if (n <= 2) return n;

    return climbStairs(n-1) + climbStairs(n-2);
};

// Recursion + memoization
// climbStairs(5) = climbStairs(4) + climbStairs(3)
// climbStairs(4) = climbStairs(3) + climbStairs(2)
// climbStairs(3) = climbStairs(2) + climbStairs(1)
// climbStairs(2) = 2
// climbStairs(1) = 1

var climbStairs = function(n, memo={}) {
    if(n in memo) return memo[n]
    if (n <= 2) return n;

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
};

// Buttom Up
var climbStairs = function(n) {
    if (n <= 2) return n;
    let dp = new Array(n+1);
     
     dp[1] =1;
     dp[2] = 2;

     for(let i=3; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
     }
     return dp[n];
};

// constant tc
var climbStairs = function(n) {
    if(n <= 2) return n;
    let prev2 = 1, prev1 =2;

    for(let i=3; i<=n; i++){
       let curr = prev2 + prev1;
       prev2 = prev1;
       prev1 = curr;
    }
    return prev1;
};