var minimumReplacement = function(nums) {
    let n = nums.length;
    let operations = 0;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] > nums[i + 1]) {
            // Calculate how many splits we need
            let parts = Math.floor(nums[i] / nums[i + 1]);
            if (nums[i] % nums[i + 1] !== 0) {
                parts++;
            }

            // Each split adds (splits - 1) operations
            operations += parts - 1;

            // After splitting, update current value to the max allowed per part
            nums[i] = Math.floor(nums[i] / parts);

            
        }
    }

    return operations;
};