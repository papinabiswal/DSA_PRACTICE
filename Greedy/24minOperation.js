var minOperations = function(nums) {
    const n = nums.length;
     const freqMap = new Map();
 
     // Count frequency of each number
     for (let num of nums) {
         freqMap.set(num, (freqMap.get(num) || 0) + 1);
     }
 
     let result = 0;
 
     for (let [num, freq] of freqMap.entries()) {
         if (freq === 1) {
             return -1; // Cannot remove a single item
         }
         
         result += Math.ceil(freq / 3);
     }
 
     return result; 
 };