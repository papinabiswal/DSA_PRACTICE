var makeEqual = function(words) {
     let n = words.length;
    let count = {};
    for(let word of words){
        for(let char of word){
            count[char] = (count[char] || 0) + 1;
        }
    }
    
    for(let key in count){
       if(count[key] % n !== 0) return false;
    }
    return true;
};


// optimise space
var makeEqual = function(words) {
     let n = words.length;
    let count = new Array(26).fill(0)
    for(let word of words){
        for(let char of word){
            count[char.charCodeAt(0) - 97]++
        }
    }
    
    for(let key of count){
       if(key % n !== 0) return false;
    }
    return true;
};