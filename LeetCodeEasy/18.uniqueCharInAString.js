var firstUniqChar = function(s) {
    let obj = {};
    for(let char of s){
        obj[char] = (obj[char] || 0)+1;
    }
    for(let i=0; i< s.length; i++){
      if(obj[s[i]] === 1){
         return i;
      }
    }
    return -1;
};

// space optimisition
var firstUniqChar = function(s) {
    let count = new Array(26).fill(0)
    for(let i=0; i< s.length; i++){
        count[s.charCodeAt(i) - 97]++;
    }
    for(let i=0; i< s.length; i++){
      if(count[s.charCodeAt(i) - 97] === 1){
         return i;
      }
    }
    return -1;
};