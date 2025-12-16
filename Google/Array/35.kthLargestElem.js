function partitionAlgo(nums, L, R) {
    let P = nums[L];
    let i = L + 1;
    let j = R;

    while (i <= j) {
        if (nums[i] < P && nums[j] > P) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }

        if (nums[i] >= P) {
            i++;
        }

        if (nums[j] <= P) {
            j--;
        }
    }

    // Place pivot at correct position
    [nums[L], nums[j]] = [nums[j], nums[L]];
    return j; // Pivot is now at index j
}

function findKthLargest(nums, k) {
    let L = 0;
    let R = nums.length - 1;

    while (true) {
        const pivotIdx = partitionAlgo(nums, L, R);

        if (pivotIdx === k - 1) {
            return nums[pivotIdx];
        } else if (pivotIdx > k - 1) {
            R = pivotIdx - 1;
        } else {
            L = pivotIdx + 1;
        }
    }
}
