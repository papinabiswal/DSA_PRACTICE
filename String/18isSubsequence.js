// check susequence of s of all letter present in t;
// run a loop end of the both the length
// if s[i] is same as t[j];
// increase i, 
// j will increase always
// when i === m return true else false;
// TC: O(n)
// SC: O(1)
function isSubsequence(s, t){
    const m = s.length;
    const n = t.length;
    let i=0, j=0;

    while(i < m && j < n){
       if(s[i] === t[j]){
          i++;
       }
       j++;
    }
    if(i === m){
      return true;
    }
    return false;
}
isSubsequence("abc", "ahbgdc")

// follow up question if there will be multiple s1, s2, s3....sk;
var isSubsequence = function(s, t) {
   const mp = new Map();

        // Saving indices of each character in t
        for (let i = 0; i < t.length; i++) {
            const ch = t[i];
            if (!mp.has(ch)) {
                mp.set(ch, []);
            }
            mp.get(ch).push(i);
        }

        let prev = -1;

        // Look if we can find characters of s with increasing indices
        for (const ch of s) {
            if (!mp.has(ch)) {
                return false;
            }

            const indices = mp.get(ch);

            // Find the first index greater than prev
            const it = indices.find(index => index > prev);

            if (it === undefined) {
                return false;
            }

            prev = it;
        }

        return true;
};

isSubsequence("abc", "ahabgdc");