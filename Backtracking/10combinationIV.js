var combinationSum4 = function(nums, target) {

    let dp = new Array(target + 1).fill(-1);

    function solve(target) {
        if (target === 0) return 1;
        if (target < 0) return 0;
        if (dp[target] !== -1) return dp[target];

        let ways = 0;
        for (let num of nums) {
            ways += solve(target - num);
        }

        return dp[target] = ways;
    }

    return solve(target);
};

// (4)
// /  |  \
// (3)  (2)  (1)
// / | \  / |   |
// (2)(1)(0)(1)(0)
// / | \  |  
// (1)(0)(0) 
// |
// (0) 