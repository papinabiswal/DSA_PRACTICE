// TC: O(n logn)
// sc: O(n)

// - Step 1: Count frequency of each number
// - Step 2: Sort the frequencies in ascending order
// - Step 3: Remove k elements from the lowest frequency groups
// - Step 4: Return how many unique numbers remain
var findLeastNumOfUniqueInts = function(arr, k) {
    let freq = {}

    for(let num of arr){
       freq[num] = (freq[num] || 0) + 1;
    }

    let freqArray = Object.values(freq).sort((a,b)=> a-b);

    for(let i=0; i < freqArray.length; i++){
        k -= freqArray[i];
        if(k < 0){
           return freqArray.length - i;
        }
    }
    return 0;
};

 //TC: O(n)
 var findLeastNumOfUniqueInts = function(arr, k) {
    const freqMap = new Map();
 
     // Step 1: Count frequency of each number
     for (const num of arr) {
         freqMap.set(num, (freqMap.get(num) || 0) + 1);
     }
 
     // Step 2: Use bucket sort idea — bucket[i] = number of elements with frequency i
     const n = arr.length;
     const bucket = new Array(n + 1).fill(0);
 
     for (const freq of freqMap.values()) {
         bucket[freq]++;
     }
 
     // Step 3: Remove elements starting from lowest frequency
     let uniqueCount = freqMap.size;
 
     for (let freq = 1; freq <= n && k > 0; freq++) {
         while (bucket[freq] > 0 && k >= freq) {
             k -= freq;
             bucket[freq]--;
             uniqueCount--;
         }
     }
 
     return uniqueCount;
 };