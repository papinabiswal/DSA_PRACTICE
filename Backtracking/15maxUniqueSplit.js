var maxUniqueSplit = function(s) {
    let maxCount = 0;
    let uniqueSet = new Set();

    function backtrack(idx, currCount){

        // pruning: Stop if the remaining characters can't increase maxCount
        if (currCount + (s.length - idx) <= maxCount) {
            return;
        }

        if(idx === s.length){
            maxCount = Math.max(maxCount, currCount);
        }

        // Try all possible substrings from idx to end
        for (let j = idx; j < s.length; j++) {
            let sub = s.substring(idx, j+1);
            if (!uniqueSet.has(sub)) {
                uniqueSet.add(sub);
                backtrack(j + 1, currCount + 1);
                uniqueSet.delete(sub); // backtrack
            }
        }
    }
    backtrack(0,0);
    return maxCount;
};