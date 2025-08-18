// bruteforce
var stringMatching = function(words) {
    let result = [];
    let n = words.length;

    for(let i=0; i< words.length; i++){
       for(let j=0; j< words.length; j++){
            if(i === j) continue;
            if(words[j].includes(words[i])){
                 result.push(words[i]);
                 break;
            }
       }
    }
    return result;
};

// string matching using KMP

var stringMatching = function(words) {
    let result = [];
    for(let i=0; i< words.length; i++){
       for(let j=0; j< words.length; j++){
           if(i === j) continue;
           if(kmpSearch(words[j], words[i])){
               result.push(words[i]);
               break;
           }
       }
    }
    return result;
};

function kmpSearch(txt, pattern){
     let i=0, j=0;
     let lps = computeLPS(pattern);
     while(i < txt.length){
        if(txt[i] === pattern[j]){
            i++;
            j++;
        } 
        if(j === pattern.length){
            return true;
        } else if(i < txt.length && txt[i] !== pattern[j]){
            if(j !== 0){
                j = lps[j-1];
            } else {
                i++;
            }
        }
     }
     return false;
}

function computeLPS(pattern){
    let n = pattern.length;
    let lps = new Array(n).fill(0);

    let length = 0;
    let i = 1;
    while(i < pattern.length){
        if(pattern[i] === pattern[length]){
            length++;
            lps[i] = length;
            i++;
        } else {
            if(length !== 0){
                length = lps[length-1];
            } else {
                i++;
            }
        }
    }
    return lps;
}


// other KMP for practice
// 2185. Counting Words With a Given Prefix
// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
// 1967. Number of Strings That Appear as Substrings in Word