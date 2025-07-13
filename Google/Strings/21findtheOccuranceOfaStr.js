// 28. Find the Index of the First Occurrence in a String
// TC: O(m*n) SC: O(1)
var strStr = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;

    for(let i=0; i<= m-n; i++){
        for(j=0; j< n; j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
            if(j === n-1){
                return i;
            }
        }
    }
    return -1;
};


// KMP Algorithm string matching
var strStr = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;

    let lps = computeLps(needle);
    let result = 0;
    let i=0;
    let j=0;
    while(i < m){
       if(haystack[i] === needle[j]){
           i++;
           j++;
       } 

       if(j === n){
           return i-j;
           j = lps[j-1];
       } else if(i < m && haystack[i] !== needle[j]){
           if(j !== 0){
              j = lps[j-1];
           } else {
              i++;
           }
       }
    }
    return -1;
};

function computeLps(pattern){
   let length =0;
   let n = pattern.length;
   let i =1;
   let lps = new Array(n).fill(0);

   while(i < pattern.length){
      if(pattern[i] === pattern[length]){
           length++;
           lps[i] = length;
           i++;
      } else {
          if(length !== 0){
             length = lps[length-1];
          } else {
             lps[i] =0;
             i++
          }
          
      }
   }
   return lps;
}