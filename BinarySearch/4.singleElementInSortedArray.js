var singleNonDuplicate = function(nums) {
    let xor = 0;
    for(let i=0; i< nums.length; i++){
       xor ^= nums[i];  
    }
    return xor;
};

// O(nlogn)
function singleNonDuplicate(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Make sure mid is even so we can compare with its pair
        if (mid % 2 === 1) { // Pairs are at (even, odd) positions: (0,1), (2,3), (4,5)
            mid--;
        }

        // If mid and mid+1 are the same, the single number is in the right half
        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }

    // When left == right, we found the single number
    return nums[left];
}
