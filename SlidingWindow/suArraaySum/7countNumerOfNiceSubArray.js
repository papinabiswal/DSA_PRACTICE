// Count Number of Nice Subarrays
var numberOfSubarrays = function(nums, k) {
    const atMost = (k) => {
        let i = 0, res = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % 2 === 1) k--;

            while (k < 0) {
                if (nums[i] % 2 === 1) k++;
                i++;
            }

            res += j - i + 1;
        }

        return res;
    }

    return atMost(k) - atMost(k - 1);
};
