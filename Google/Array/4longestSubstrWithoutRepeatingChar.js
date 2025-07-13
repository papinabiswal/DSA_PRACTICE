// brute force
// TC: O(n^2)
// SC: O(n)

var lengthOfLongestSubstring = function(s) {
    let maxLength =0;

    for(let i=0; i< s.length; i++){
        let seen = new Set();
        let currLength =0;

        for(let j =i; j< s.length; j++){
           if(seen.has(s[j])){
              break;
           }
           seen.add(s[j]);
           currLength++;
        }
        maxLength = Math.max(maxLength, currLength);
    }
    return maxLength;
};


// Sliding window

var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();
    let left =0;
    let right = 0;
    let maxLength =0;

    while(right < s.length){
        while(charSet.has(s[right])){
             charSet.delete(s[left]);
             left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right-left+1);
        right++;
    }
   return maxLength;
};