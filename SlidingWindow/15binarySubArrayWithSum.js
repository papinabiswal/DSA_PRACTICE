// - Use a trick: count of subarrays with sum == goal = atMost(goal) - atMost(goal - 1)
// - For atMost:
//    - Use sliding window to track sum ≤ target
//    - If sum exceeds target, shrink from left
//    - For every valid position j, add (j - i + 1) subarrays




// AtMost(2) = All bunches with 0, 1, or 2 toffees
// AtMost(1) = All bunches with 0 or 1 toffees
// Now, if you want only the bunches with exactly 2, what do you do?


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