// - Traverse nums[] from right to left
// - For each nums[i], if it's > nums[i+1]:
//   - Split nums[i] into parts so each ≤ nums[i+1]
//   - parts = ceil(nums[i] / nums[i+1])
//   - Add (parts - 1) to operations
//   - Update nums[i] = floor(nums[i] / parts)
// - Return total operations

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