// Subarrays with Product Less Than K
// here, instead of using the atMost(k) - atMost(k - 1) trick, we use direct sliding window because:

// The condition is product < k (not exactly equal) — so atMost is enough.

function numSubarrayProductLessThanK(nums, k) {
    if (k <= 1) return 0;

    let prod = 1, left = 0, result = 0;

    for (let right = 0; right < nums.length; right++) {
        prod *= nums[right];

        while (prod >= k) {
            prod /= nums[left];
            left++;
        }

        result += right - left + 1;
    }

    return result;
}
