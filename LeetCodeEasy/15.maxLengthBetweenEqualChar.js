var maxLengthBetweenEqualCharacters = function(s) {
    let result = -1;
    for(let i=0; i< s.length; i++){
        for(let j= i+1; j< s.length; j++){
           if(s[i] === s[j]){
               result = Math.max(result, j-i-1);
           }
        }
    }
    return result;
};

// optimised
var maxLengthBetweenEqualCharacters = function(s) {
    let map = new Map();
    let result = -1
    for(let i =0; i< s.length; i++){
       if(map.has(s[i])){
          result = Math.max(result, i- map.get(s[i])-1) ;
       } else {
          map.set(s[i], i);
       }
    }
    return result;
};

// space optimised
var maxLengthBetweenEqualCharacters = function(s) {
    let count = new Array(26).fill(-1);
    let result = -1
    for(let i =0; i< s.length; i++){
       let idx = s.charCodeAt(i) - 97;
       if(count[idx] !== -1){
           result = Math.max(result, i-count[idx]-1);
       } else {
          count[idx] = i;
       }
    }
    return result;
};