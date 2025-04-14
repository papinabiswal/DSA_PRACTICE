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