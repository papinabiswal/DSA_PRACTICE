var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if middle number is greater than rightmost
        if (nums[mid] > nums[right]) {
            // That means the min is on the right side
            left = mid + 1;
        } else {
            // The min is on the left side (maybe mid is the min!)
            right = mid;
        }
    }

    // left and right meet at the smallest number
    return nums[left];
};
