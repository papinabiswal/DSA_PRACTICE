var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;

    if (n < d) return -1;

    function solve(idx, daysLeft) {
        // If only one day is left, we must take all remaining jobs today
        if (daysLeft === 1) {
            let maxDifficulty = 0;
            for (let i = idx; i < n; i++) {
                maxDifficulty = Math.max(maxDifficulty, jobDifficulty[i]);
            }
            return maxDifficulty;
        }

        let maxSoFar = -Infinity;
        let result = Infinity;

        // Try taking jobs from idx to i on the current day,
        // and solve the rest recursively
        for (let i = idx; i <= n - daysLeft; i++) {
            maxSoFar = Math.max(maxSoFar, jobDifficulty[i]);
            let next = maxSoFar + solve(i + 1, daysLeft - 1);
            result = Math.min(result, next);
        }

        return result;
    }

    return solve(0, d);
};

// using memoization
var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;

    if (n < d) return -1;

    // Create a 2D memo array initialized with -1
    let memo = new Array(n).fill(-1).map(() => new Array(d + 1).fill(-1));

    function solve(idx, daysLeft) {
        if (daysLeft === 1) {
            let maxDifficulty = 0;
            for (let i = idx; i < n; i++) {
                maxDifficulty = Math.max(maxDifficulty, jobDifficulty[i]);
            }
            return maxDifficulty;
        }

        if (memo[idx][daysLeft] !== -1) {
            return memo[idx][daysLeft];
        }

        let maxSoFar = -Infinity;
        let result = Infinity;

        for (let i = idx; i <= n - daysLeft; i++) {
            maxSoFar = Math.max(maxSoFar, jobDifficulty[i]);
            let next = solve(i + 1, daysLeft - 1);
            result = Math.min(result, maxSoFar + next);
        }

        memo[idx][daysLeft] = result;
        return result;
    }

    return solve(0, d);
};

// using buttom up approach
// TC: O(n^2 * d)
// SC: O(n*d)
var minDifficulty = function(jobDifficulty, d) {
    const n = jobDifficulty.length;

    if(n < d) return -1;
    
    const dp = new Array(n+1).fill().map(()=> Array(d+1).fill(Infinity));
    // Base case: when there's only 1 day, we must take all remaining jobs in that day
    for(let i=0; i< n; i++){
        let maxJob = 0;
        for(let j=i; j < n; j++){
           maxJob = Math.max(maxJob, jobDifficulty[j]);
        }
        dp[i][1] = maxJob;
    }

    // fill the dp to days 2  to d
    for(let day =2; day <= d; day++){
        for(let i=0; i<= n-day; i++){

           let maxJob = 0;
           for (let j = i; j <= n - day; j++) {
             maxJob = Math.max(maxJob, jobDifficulty[j]);
             dp[i][day] = Math.min(dp[i][day], maxJob+ dp[j + 1][day - 1])
           }
        }
    }
    return dp[0][d];
};