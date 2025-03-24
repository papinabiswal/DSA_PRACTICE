var beautifulSubsets = function(nums, k) {
    let result = 0;
    
    let freq = new Array(1001).fill(0); // Large enough array to track occurrences

    function dfs(idx) {
        if (idx === nums.length) {
            result++;
            return;
        }

        // Not take the current number
        dfs(idx + 1);

        // Checking if we can take nums[idx] or not
        if (!freq[nums[idx] - k] && !freq[nums[idx] + k]) { 
            freq[nums[idx]]++; // Mark as taken
            dfs(idx + 1);
            freq[nums[idx]]--; // Backtrack
        }
    }

    dfs(0);
    return result - 1;
};