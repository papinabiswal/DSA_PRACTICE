var findSubsequences = function(nums) {
    let n = nums.length;
    let result = [];

    function backtrack(idx, curr) {
        if (curr.length > 1) {
            result.push([...curr]); // Store a valid subsequence
        }

        let used = new Set(); // Prevent duplicate elements at the same level

        for (let i = idx; i < n; i++) {
            if ((curr.length === 0 || nums[i] >= curr[curr.length - 1]) && !used.has(nums[i])) {
                used.add(nums[i]); // Mark this element as used at this level
                
                curr.push(nums[i]); // Include the number
                backtrack(i + 1, curr); // Move to the next index
                curr.pop(); // Backtrack to explore other options
            }
        }
    }

    backtrack(0, []);
    return result;
};