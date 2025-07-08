var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;

    function solve(idx){
        let result = 0;
        let currMax = -1;

        if(idx >= n) return 0;

        for(let i=idx; i < n && i -idx + 1 <= k; i++){
            currMax = Math.max(currMax, arr[i]);
            let length = i-idx+1;
            result = Math.max(result, currMax * length + solve(i+1)) 
        }
        return result;
    }
    return solve(0);
};

// memoization
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const memo = new Array(n).fill(-1);

    function solve(idx){
        if(idx >= n) return 0;
        if(memo[idx] !== -1) return memo[idx];
        let result = 0;
        let currMax = -1;

        for(let i=idx; i< n && i-idx+1 <= k; i++){
              currMax = Math.max(currMax, arr[i]);
              let length = i-idx+1;
              result = Math.max(result, length * currMax + solve(i+1));
        }
        memo[idx] = result;
        return result;
    }
    return solve(0);
};

// optimized solution using dp
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const t = new Array(n + 1).fill(0);

    // t[i] = maximum sum for the first i elements
    for (let i = 1; i <= n; i++) {
        let currMax = -1;

        for (let j = 1; j <= k && i - j >= 0; j++) {
            currMax = Math.max(currMax, arr[i - j]);
            t[i] = Math.max(t[i], t[i - j] + currMax * j);
        }
    }

    return t[n];
};
