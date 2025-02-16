// unique 3length pallindromic substring
// 3 length means 1st and last ch should be same
// keep set of char to find the unique pallindrome when we are checking between first index and last index
// set = {a,b,c}
// start idx i and last idx j of same char
// loop will go from i+1 to j-1
//T.C : O(n)
//S.C : O(1) - Only 26 sized always

function countPalindromicSubsequence (s){
    const n = s.length;
    const uniqueChar = new Set(s);
    let result =0;

    for(let letter of uniqueChar){
          let first_idx = -1;
          let last_idx = -1;

          for(let i=0; i< s.length; i++){
              if(s[i] === letter){
                if(first_idx === -1){
                    first_idx = i; // fix, only when the first idx is -1;
                }
                last_idx = i; // keep changing
              }     
          }

           // Collect unique characters between firstIdx and lastIdx
           let middleSet = new Set();
           for(let mid = first_idx+1; mid < last_idx; mid++){
              middleSet.add(s[mid]);
           }

           result += middleSet.size;
    }
    return result;

}
countPalindromicSubsequence("aabca");

//T.C : O(n)
//S.C : O(1) - Only 26 sized always
var countPalindromicSubsequence = function(s) {
    let n = s.length;
    
    // Initialize an array of 26 elements with [-1, -1] to store first and last indices
    let indices = Array(26).fill().map(() => [-1, -1]);

    // Find first and last occurrence of each character
    for (let i = 0; i < n; i++) {
        let idx = s.charCodeAt(i) - 'a'.charCodeAt(0);
        
        if (indices[idx][0] === -1) {
            indices[idx][0] = i;
        }
        
        indices[idx][1] = i;
    }

    let result = 0;

    // Iterate through each character in the alphabet
    for (let i = 0; i < 26; i++) {
        if (indices[i][0] === -1) continue; // Skip characters that are not in the string

        let uniqueChars = new Set();

        // Collect unique characters between first and last occurrences
        for (let middle = indices[i][0] + 1; middle < indices[i][1]; middle++) {
            uniqueChars.add(s[middle]);
        }

        result += uniqueChars.size;
    }

    return result;
};
