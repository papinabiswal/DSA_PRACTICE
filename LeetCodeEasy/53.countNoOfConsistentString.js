var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set(allowed);
    let count = 0;
    for(let word of words){
        let isConsistent = true;
        for(let ch of word){
            if(!allowedSet.has(ch)){
                isConsistent = false;
                break;
            }
        }
        if(isConsistent) count++;
    }
    return count;
};

// using 26 array size
var countConsistentStrings = function(allowed, words) {
   let obj = new Array(26).fill(0);

   for(let i=0; i< allowed.length; i++){
      obj[allowed.charCodeAt(i) -97] = 1;
   }
    let count = 0;
    for(let word of words){
        let isConsistent = true;
        for(let ch of word){
            if(obj[ch.charCodeAt(0)-97] === 0){
                isConsistent = false;
                break;
            }
        }
        if(isConsistent) count++;
    }
    return count;
};