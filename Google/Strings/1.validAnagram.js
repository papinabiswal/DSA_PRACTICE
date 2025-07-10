// TC: O(n)
// SC: O(1) because we are using a fixed size array of 26 characters
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let lookup = {};
    for(let i=0; i< s.length; i++){
        let letter = s[i];
       lookup[letter] = (lookup[letter] || 0) + 1;
    }

    for(let i=0; i< t.length; i++){
        let letter = t[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
};