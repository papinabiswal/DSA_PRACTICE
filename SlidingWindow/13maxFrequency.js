function maxFrequency(nums, k) {
    nums.sort((a, b) => a - b);

    let result = 0;
    let i = 0;
    let currSum = 0;

    for (let j = 0; j < nums.length; j++) {
        let target = nums[j];
        currSum += nums[j];

        while ((j - i + 1) * target - currSum > k) {
            currSum -= nums[i];
            i++;
        }

        result = Math.max(result, j - i + 1);
    }

    return result;
}
