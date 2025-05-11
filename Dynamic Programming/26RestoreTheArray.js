var numberOfArrays = function(s, k) {
    const MOD = 1e9 + 7;
    const n = s.length;

    function solve(start) {
        if (start >= n) return 1;
        if (s[start] === '0') return 0;

        let ans = 0;
        let num = 0;

        for (let end = start; end < n; end++) {
            num = num * 10 + (s[end] - '0');
            if (num > k) break;

            ans = (ans + solve(end + 1)) % MOD;
        }

        return ans;
    }

    return solve(0);
};

//Memo
var numberOfArrays = function(s, k) {
    const MOD = 1e9 + 7;
    const n = s.length;
    const memo = new Array(n).fill(-1);

    function solve(start) {
        if (start >= n) return 1;
        if (s[start] === '0') return 0;

        if(memo[start] !== -1) return memo[start];
        let ans = 0;
        let num = 0;

        for (let end = start; end < n; end++) {
            num = num * 10 + (s[end] - '0');
            if (num > k) break;

            ans = (ans + solve(end + 1)) % MOD;
        }
        memo[start] = ans;
        return ans;
    }

    return solve(0);
};

// Buttom up approach
var numberOfArrays = function(s, k) {
    const MOD = 1e9 + 7;
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[n] = 1; // base case: empty string has 1 valid split

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            dp[i] = 0;
            continue;
        }

        let num = 0;
        for (let j = i; j < n; j++) {
            num = num * 10 + (s[j] - '0');
            if (num > k) break;
            dp[i] = (dp[i] + dp[j + 1]) % MOD;
        }
    }

    return dp[0];
};
