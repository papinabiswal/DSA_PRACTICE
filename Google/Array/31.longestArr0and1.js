// Longest subarray equal number of 0 and 1;
// https://www.geeksforgeeks.org/dsa/largest-subarray-with-equal-number-of-0s-and-1s/

function longestSubArray(nums){
    let maxLen = 0;
    let prefix = 0;
    let map = new Map();

    map.set(0,-1);

    for(let i=0; i< nums.length; i++){
        prefix += (nums[i] === 0 ? -1 : 1);

        if(map.has(prefix)){
            maxLen = Math.max(maxLen, i-map.get(prefix))
        } else {
            map.set(prefix, i);
        }
    }
    return maxLen;
}
longestSubArray([1, 0, 1, 1, 1, 0, 0]);



// 6. Longest Subarray With Equal Letters and Digits
// https://www.geeksforgeeks.org/longest-subarray-with-equal-number-of-letters-and-digits/

function longestAlphaNumericSubarray(arr) {
    let map = new Map();
    let sum = 0;
    let maxLen = 0;

    // prefix sum 0 at index -1
    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            sum += 1;   // alphabet
        } else {
            sum -= 1;   // digit
        }

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }
    return maxLen;
}
