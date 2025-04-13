var numberOfSubarrays = function(nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1);
};

function atMost(nums, k) {
    let left = 0, result = 0;
    
    for (let right = 0; right < nums.length; right++) {
        // If it's an odd number, decrease k
        if (nums[right] % 2 === 1) k--;

        // If too many odds, shrink window
        while (k < 0) {
            if (nums[left] % 2 === 1) k++;
            left++;
        }

        // All subarrays ending at right with valid lefts
        result += right - left + 1;
    }

    return result;
}
