// TC: O(n);
// SC: O(1);
var nextPermutation = function(nums) {
    let n = nums.length;

    // Step 1: Find the pivot
    let pivot = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }

    // If pivot is not found → array is in descending order
    if (pivot === -1) {
        nums.reverse();
        return nums;
    }

    // Step 2: Find the next greater element from the right side
    for (let j = n - 1; j > pivot; j--) {
        if (nums[j] > nums[pivot]) {
            // Step 3: Swap
            [nums[j], nums[pivot]] = [nums[pivot], nums[j]];
            break;
        }
    }

    // Step 4: Reverse the right side
    let left = pivot + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    return nums;
};
