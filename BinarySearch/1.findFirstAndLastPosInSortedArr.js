// Find First and Last Position of Element in Sorted Array
var searchRange = function(nums, target) {
    function findBound(isFirst) {
        let left = 0, right = nums.length - 1;
        let bound = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                bound = mid;
                if (isFirst) {
                    right = mid - 1; // move left to find first
                } else {
                    left = mid + 1;  // move right to find last
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return bound;
    }

    const first = findBound(true);
    const last = findBound(false);

    return [first, last];
};

//*********************** OR ************************
var searchRange = function(nums, target) {

    function findFirst(nums, target) {
        let left = 0, right = nums.length; // notice: right = nums.length (exclusive)

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] >= target) {
                right = mid; // go left side
            } else {
                left = mid + 1;
            }
        }

        // check if found
        if (left === nums.length || nums[left] !== target) return -1;
        return left;
    }

    function findLast(nums, target) {
        let left = 0, right = nums.length; // right is exclusive

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] <= target) {
                left = mid + 1; // go right side
            } else {
                right = mid;
            }
        }

        // since right is exclusive, actual last index = left - 1
        if (left === 0 || nums[left - 1] !== target) return -1;
        return left - 1;
    }

    const first = findFirst(nums, target);
    const last = findLast(nums, target);
    return [first, last];
};


// Brute force

var searchRange = function(nums, target) {
    let result = [];
    let start = -1, end = -1;
    for(let i = 0; i<nums.length; i++){
        if(nums[i] === target){
            start = i;
            
            break;
        }
    }
    result.push(start)
    for(let i = nums.length-1; i>=0; i--){
        if(nums[i] === target){
            end = i;
           
            break;
        }
    }
    result.push(end)

    return result;
};
