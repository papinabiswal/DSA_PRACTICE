var resultsArray = function(nums, k) {
    const n = nums.length;
     const result = new Array(n - k + 1).fill(-1);
 
     let count = 1; // count of consecutive increasing elements
 
     // Preprocess the first window
     for (let i = 1; i < k; i++) {
         if (nums[i] === nums[i - 1] + 1) {
             count++;
         } else {
             count = 1;
         }
     }
 
     if (count === k) {
         result[0] = nums[k - 1];
     }
 
     let i = 1;
     let j = k;
 
     while (j < n) {
         if (nums[j] === nums[j - 1] + 1) {
             count++;
         } else {
             count = 1;
         }
 
         if (count >= k) {
             result[i] = nums[j];
         }
 
         i++;
         j++;
     }
 
     return result;
 };

 // monotonic deque
 var resultsArray = function(nums, k) {
    const n = nums.length;
    const result = [];
    const deque = []; // Monotonic deque (will store increasing consecutive numbers)

    for (let j = 0; j < n; j++) {

        if (deque.length === k) {
            deque.shift(); // Remove the front if deque size is k
        }

        if (deque.length > 0 && deque[deque.length - 1] !== nums[j] - 1) {
            deque.length = 0; // Not consecutive, reset the deque
        }

        deque.push(nums[j]); // Add current element

        if (j >= k - 1) {
            if (deque.length === k) {
                result.push(deque[deque.length - 1]); // The last element is max due to increasing order
            } else {
                result.push(-1);
            }
        }
    }

    return result;
};