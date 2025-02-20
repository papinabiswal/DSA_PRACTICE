// s = "bab", t = "aba"
// Replace the first 'a' in t with b, t = "bba" which is anagram of s.
// take an arry of length 26 where to store the freq
// instead of taking two array take one 
// add the freq count of s
// decrease the freq count of t in that array
// those char freq is having +ve value add them
// return the result
// TC: O(n)
// SC: O(1)

var minSteps = function(s, t) {
    const n = s.length;
    const mp = new Array(26).fill(0);

    for(let i=0; i< n; i++){
       mp[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
       mp[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    let result =0;
    for(let i=0; i< 26; i++){
         if(mp[i] > 0){
            result += mp[i];
         }
    }
    return result;
};
minSteps("bab", "aba");