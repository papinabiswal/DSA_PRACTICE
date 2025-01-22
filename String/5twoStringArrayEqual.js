

var arrayStringsAreEqual = function(word1, word2) {
    const str1 = word1.join('');
    const str2 = word2.join('');
    
    return str1 === str2;
};


var arrayStringsAreEqual = function(word1, word2) {
    let a="", b="";
    for(let i=0; i < word1.length; i++){
        a += word1[i];
    }
    for(let i=0; i < word2.length; i++){
        b += word2[i];
    }
    if(a === b){
        return true;
    }
    return false;
};
arrayStringsAreEqual(["a", "cb"], ["ab", "c"])