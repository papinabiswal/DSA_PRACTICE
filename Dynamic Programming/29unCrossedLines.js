var maxUncrossedLines = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    function solve(i, j){
         if(i >= m || j >= n ){
            return 0;
         }
         if(nums1[i] === nums2[j]){
            return 1+solve(i+1, j+1);
         } else {
             const fix_i = solve(i, j+1);
             const fix_j = solve(i+1, j);
             return Math.max(fix_i, fix_j);
         }
    }
    return solve(0, 0);
};

// Buttom up
// same as LCS
var maxUncrossedLines = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    // Create a 2D DP array of size (m+1) x (n+1)
    const dp = new Array(m+1).fill(0).map(()=> new Array(n+1).fill(0))

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
};