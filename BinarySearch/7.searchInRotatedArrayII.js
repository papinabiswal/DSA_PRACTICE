function search(nums, target) {
    // Step 1: Find pivot (index of minimum element) even with duplicates
    const findPivotWithDuplicates = (nums) => {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                // nums[mid] === nums[right] -> can't decide, shrink right
                right--;
            }
        }

        return left; // pivot index
    };

    // Step 2: Standard binary search
    const binarySearch = (nums, target, left, right) => {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) return true;
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    };

    // Edge case: empty array
    if (!nums.length) return false;

    const pivot = findPivotWithDuplicates(nums);

    // Step 3: Decide where to binary search
    if (target >= nums[pivot] && target <= nums[nums.length - 1]) {
        return binarySearch(nums, target, pivot, nums.length - 1);
    } else {
        return binarySearch(nums, target, 0, pivot - 1);
    }
}
