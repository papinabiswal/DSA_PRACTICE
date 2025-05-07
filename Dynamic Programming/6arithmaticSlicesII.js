var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    let total = 0;
    const dp = new Array(n).fill(0).map(() => new Map());

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            const countAtJ = dp[j].get(diff) || 0;

            // Only count those subsequences that become length >= 3
            total += countAtJ;

            // Save this (can be length 2 or longer for future use)
            dp[i].set(diff, (dp[i].get(diff) || 0) + countAtJ + 1);
        }
    }

    return total;
};
