function solve(nums, queries, k) {
    const n = nums.length;
    const diff = new Array(n).fill(0);

    // step1
    for (let i = 0; i < k; i++) {
        const [start, end, del] = queries[i];
        diff[start] += del;
        if (end + 1 < n) diff[end + 1] -= del;
    }

    // step2
    // Build prefix sum from difference array
    for (let i = 1; i < n; i++) {
        diff[i] += diff[i - 1];
    }

    // Check if after applying k queries, all nums[i] <= diff[i]
    for (let i = 0; i < n; i++) {
        if (diff[i] < nums[i]) return false;
    }

    return true;
}

var minZeroArray = function (nums, queries) {
    const nq = queries.length;

    let left = 0;       // 0
    let right = nq;      // 2
    let ans = -1;       

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 1
        let isPossible = solve(nums, queries, mid); // 

        if (isPossible) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};