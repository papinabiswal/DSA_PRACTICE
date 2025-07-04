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
    let start = 0;
    let maxLength = 0;
    const map = new Map();  // stores character and its last index

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If character is already seen and its index is within the window
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1;
        }

        map.set(char, end);  // update or insert the current character's index
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};