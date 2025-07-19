function search(nums, target) {
    const findMinIndex = (nums) => {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left; // pivot index
    };

    const binarySearch = (nums, target, left, right) => {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) return mid;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    };

    const pivot = findMinIndex(nums);

    // Decide which side to search in
    if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
        // Target is in right sorted half
        return binarySearch(nums, target, pivot, nums.length - 1);
    } else {
        // Target is in left sorted half
        return binarySearch(nums, target, 0, pivot - 1);
    }
}
