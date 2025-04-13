var numSubarraysWithSum = function(nums, goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1);
 
     function atMost(arr, target) {
         if (target < 0) return 0;
 
         let i = 0, j = 0, sum = 0, count = 0;
 
         while (j < arr.length) {
             sum += arr[j];
 
             while (sum > target) {
                 sum -= arr[i];
                 i++;
             }
 
             count += (j - i + 1);
             j++;
         }
 
         return count;
     } 
 };