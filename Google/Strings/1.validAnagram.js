var isAnagram = function(s, t) {
   let lookup = {};
   for(let letter of s){
     lookup[letter] = (lookup[letter] || 0) + 1;
   }

   for(let letter of t){
      if(!lookup[letter]){
         return false;
      } else {
          lookup[letter] -= 1;
      }
   }
   return true;
};

// TC: O(n)
// SC: O(1) because we are using a fixed size array of 26 characters
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
     
    let count = new Array(26).fill(0);
    for(let i =0; i< s.length; i++){
        count[s.charCodeAt(i) -97]++;
        count[t.charCodeAt(i) -97]--;
    }

    for(let i= 0; i < 26; i++){
         if(count[i] !== 0){
            return false;
         }
    }
    return true;
};