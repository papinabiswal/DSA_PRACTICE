// Number of subarrays with at most K distinct elements 

var subarraysWithKDistinct = function(nums, k) {
    return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
};

function slidingWindow(nums, k) {
    let mp = {};
    let i = 0, j = 0;
    let count = 0;
    const n = nums.length;

    while (j < n) {
        mp[nums[j]] = (mp[nums[j]] || 0) + 1;

        while (Object.keys(mp).length > k) {
            mp[nums[i]]--;
            if (mp[nums[i]] === 0) {
                delete mp[nums[i]];
            }
            i++;
        }

        count += (j - i + 1); // all subarrays ending at j
        j++;
    }

    return count;
}

//. 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    const slidingWindow = (nums, k) => {
        let i = 0, j = 0, count = 0;
        const map = new Map();
        
        while (j < nums.length) {
            map.set(nums[j], (map.get(nums[j]) || 0) + 1);
            
            while (map.size > k) {
                map.set(nums[i], map.get(nums[i]) - 1);
                if (map.get(nums[i]) === 0) map.delete(nums[i]);
                i++;
            }
            
            count += j - i + 1;
            j++;
        }
        
        return count;
    };
    
    return slidingWindow(nums, k) - slidingWindow(nums, k - 1);
}