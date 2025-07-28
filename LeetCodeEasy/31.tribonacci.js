var tribonacci = function(n) {
    if(n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
};


// dp
var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let dp = [0, 1, 1]; // T0, T1, T2

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
};