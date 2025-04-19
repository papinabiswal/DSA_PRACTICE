var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
 
     let maxEl = 1;
     arr[0] = 1
 
     for (let i = 1; i < arr.length; i++) {
         
        if (arr[i] - arr[i - 1] > 1) {
             arr[i] = arr[i - 1] + 1; // Decrease current element if needed
         }
 
         maxEl = Math.max(maxEl, arr[i]); // Track the max element
     }
 
     return maxEl; 
 };