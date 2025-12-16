var wordBreak = function(s, wordDict) {
    const st = new Set(wordDict);
    const n = s.length;

    function solve(idx) {
        // If we reached the end → valid segmentation
        if (idx === n) return true;

        // If entire remaining substring exists in dict
        if (st.has(s.substring(idx))) {
            return true;
        }

        // Try all possible lengths
        for (let l = 1; l <= n; l++) {
            const temp = s.substring(idx, idx + l);

            if (st.has(temp) && solve(idx + l)) {
                return true;
            }
        }

        return false;
    }

    return solve(0);
};

// memoization
var wordBreak = function(s, wordDict) {
    const st = new Set(wordDict);
    const n = s.length;
    const memo = new Array(n).fill(-1);

    function solve(idx) {
        // If we reached the end → valid segmentation
        if (idx === n) return true;

        // If already computed
        if (memo[idx] !== -1) return memo[idx] === 1;

        // If entire remaining substring exists in dict
        if (st.has(s.substring(idx))) {
            memo[idx] = 1;
            return true;
        }

        // Try all possible lengths
        for (let l = 1; l <= n; l++) {
            const temp = s.substring(idx, idx + l);

            if (st.has(temp) && solve(idx + l)) {
                memo[idx] = 1;
                return true;
            }
        }

        memo[idx] = 0;
        return false;
    }

    return solve(0);
}
