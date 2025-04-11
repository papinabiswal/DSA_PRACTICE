var getAverages = function(nums, k) {
    if (k === 0) return nums;

    let n = nums.length;
    let result = new Array(n).fill(-1);

    let windowSize = 2 * k + 1;
    if (n < windowSize) return result;

    let windowSum = 0;

    // Calculate the sum of the first window
    for (let i = 0; i < windowSize; i++) {
        windowSum += nums[i];
    }

    result[k] = Math.floor(windowSum / windowSize); // Average at the center

    // Slide the window
    for (let i = k + 1; i < n - k; i++) {
        windowSum = windowSum - nums[i - k - 1] + nums[i + k];
        result[i] = Math.floor(windowSum / windowSize);
    }

    return result;
};