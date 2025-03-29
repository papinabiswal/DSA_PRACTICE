// Recursion
// TC: O(n)
// SC: O(n)
var fib = function(n) {
    if(n <= 1) return n;
     return fib(n-1) + fib(n-2);
};
fib(5);

// recursion + memoization
// TC: O(n)
// SC:O(n)
// fib(5) = fib(4) + fib(3)
// fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// fib(2) = fib(1) + fib(0)
// Each function call recomputes Fibonacci values multiple times, leading to an exponential time complexity O(2ⁿ). so we need memo
var fib = function(n, memo={}) {
    if(n in memo) return memo[n];
    if(n <= 1) return n;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
fib(5);

// Buttom up approach
// TC:O(n)
// SC: O(n)
var fib = function(n) {
    if(n <= 1) return n;
    let dp = new Array(n+1);
    dp[0] =0;
    dp[1] = 1;

    for(let i=2; i<=n; i++){
       dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};
fib(5);

//optimised Version or constance space
// TC: O(n)
// SC: O(1)
var fib = function(n) {
    if(n <= 1) return n;
    let prev2 = 0, prev1 = 1;
    for(let i=2; i<= n; i++){
       let curr = prev1 + prev2;
       prev2 = prev1;
       prev1 = curr;
    }
    return prev1;
}
fib(5);