var search = function(nums, target) {
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return true;
        }
       
    }
    return false;
};

// **************************************************************************************************************

var search = function(nums, target) {
    const findPivotWithDuplicates = (nums) => {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                // Critical fix: Only reduce right **when necessary**
                if (nums[right - 1] > nums[right]) {
                    left = right;
                    break;
                }
                right--;
            }
        }
        return left;
    };

    const binarySearch = (nums, target, left, right) => {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) return true;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    };

    const pivot = findPivotWithDuplicates(nums);

    // If array is fully sorted, pivot might be 0
    if (nums[pivot] <= target && target <= nums[nums.length - 1]) {
        return binarySearch(nums, target, pivot, nums.length - 1);
    } else {
        return binarySearch(nums, target, 0, pivot - 1);
    }
};