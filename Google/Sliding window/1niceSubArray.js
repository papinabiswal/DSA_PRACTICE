var numberOfSubarrays = function(nums, k) {
    return atMostK(nums, k) - atMostK(nums, k - 1);
};

function atMostK(nums, k) {
    let n = nums.length;
    let i = 0, result = 0;

    for (let j = 0; j < n; j++) {
        if (nums[j] % 2 !== 0) k--; // odd number

        while (k < 0) {
            if (nums[i] % 2 !== 0) k++;
            i++;
        }

        result += j - i + 1;
    }

    return result;
}
