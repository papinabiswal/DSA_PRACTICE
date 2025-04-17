var continuousSubarrays = function(nums) {
    const n = nums.length;
    const map = new Map();
    
    let i = 0;
    let j = 0;
    let count = 0;

    while (j < n) {
        // Add current element to the map
        map.set(nums[j], (map.get(nums[j]) || 0) + 1);

        // Get min and max keys from map (O(k) for small window)
        while (Math.max(...map.keys()) - Math.min(...map.keys()) > 2) {
            // Shrink the window from the left
            map.set(nums[i], map.get(nums[i]) - 1);
            if (map.get(nums[i]) === 0) {
                map.delete(nums[i]);
            }
            i++;
        }

        count += j - i + 1;
        j++;
    }

    return count;
};

// Example usage:
console.log(continuousSubarrays([1, 2, 3])); // Output: 6
console.log(continuousSubarrays([1, 3, 5, 2])); // Output: 7
