// It includes both minK and maxK

// All numbers inside are between minK and maxK
var countSubarrays = function(nums, minK, maxK) {
    let res = 0;
    let badIdx = -1, leftIdx = -1, rightIdx = -1;

    for (let i = 0; i < nums.length; ++i) {
        if (!(minK <= nums[i] && nums[i] <= maxK)) {
            badIdx = i;
        }

        if (nums[i] === minK) {
            leftIdx = i;
        }

        if (nums[i] === maxK) {
            rightIdx = i;
        }

        res += Math.max(0, Math.min(leftIdx, rightIdx) - badIdx);
    }

    return res;
};