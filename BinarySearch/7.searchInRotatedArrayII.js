var search = function(nums, target) {
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            return true;
        }
       
    }
    return false;
};

// **************************************************************************************************************

// same a serah in rotated array but with out duplicates
// only here if duplicatez are there then we will have to skip them while finding pivot
// and then we will do binary search in the respective half
// time complexity will be o(n) in worst case if all elements are same
// otherwise o(log n)
// space complexity o(1)

var search = function(nums, target) {
     const findMinIndex = (nums) => {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {

            // Skip duplicates from both ends (left and right)
            while(left < right && nums[left] === nums[left+1])
              left++;

            while(left < right && nums[right] === nums[right-1])
              right--;

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
            if (nums[mid] === target) return true;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
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
};