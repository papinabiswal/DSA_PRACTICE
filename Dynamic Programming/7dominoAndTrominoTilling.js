var numTilings = function(n) {
    const M = 1e9 + 7;

    function solve(n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (n === 3) return 5;

        return (2 * solve(n - 1) % M + solve(n - 3) % M) % M;
    }

    return solve(n);
};

var numTilings = function(n) {
    const M = 1e9 + 7;

    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 5;

    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;

    for (let i = 4; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] % M + dp[i - 3]) % M;
    }

    return dp[n];
};
