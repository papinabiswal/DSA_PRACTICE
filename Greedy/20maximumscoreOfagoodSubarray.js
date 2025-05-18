// - Start window at index k
// - curMin = nums[k]
// - While we can expand:
//    - Expand toward larger neighbor to maintain better score
//    - Update curMin
//    - Update result = max(result, curMin × window size)
// - Return result

var maximumScore = function(nums, k) {
    const n = nums.length;
    let i = k;
    let j = k;
    let curMin = nums[k];
    let result = nums[k];
    
    while (i > 0 || j < n - 1) {
        let leftValue = (i > 0) ? nums[i - 1] : 0;
        let rightValue = (j < n - 1) ? nums[j + 1] : 0;

        if (leftValue < rightValue) {
            j++;
            curMin = Math.min(curMin, nums[j]);
        } else {
            i--;
            curMin = Math.min(curMin, nums[i]);
        }

        result = Math.max(result, curMin * (j - i + 1));
    }
    
    return result;
};