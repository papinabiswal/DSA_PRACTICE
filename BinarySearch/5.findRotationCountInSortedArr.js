// Find the Rotation Count in Rotated Sorted array
// find the min value.
// return that index
function findKRotation(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // The min is on the right side
            left = mid + 1;
        } else {
            // The min is on the left side or is mid
            right = mid;
        }
    }

    // The index of the minimum element is the number of rotations
    return left;
}
