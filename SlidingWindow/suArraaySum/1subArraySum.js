function numSubarraysWithSum(nums, goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1);
}

function atMost(nums, k) {
    if (k < 0) return 0; // edge case

    let left = 0, sum = 0, count = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        count += right - left + 1;
    }

    return count;
}
