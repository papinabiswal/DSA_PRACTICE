// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

var countCharacters = function(words, chars) {
    
    function getFreqMap(letter){
         let lookup = {};
         for(let ch of letter){
             lookup[ch] = (lookup[ch] || 0) + 1;
         }
         return lookup;
    }

    const charsFreq = getFreqMap(chars);
    let totalLength = 0;

    for(let word of words){
        const wordFreq = getFreqMap(word);
        let canForm = true;

        for(let ch in wordFreq){
            if(!charsFreq[ch] || wordFreq[ch] > charsFreq[ch]){
                canForm = false;
                break;
            }
        }
        if(canForm){
            totalLength += word.length;
        }
    }
    return totalLength;
};

// optimised

var countCharacters = function(words, chars) {
    
    function getFreqMap(letter){
         let lookup = new Array(26).fill(0);
         for(let ch of letter){
             lookup[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
         }
         return lookup;
    }

    const charsFreq = getFreqMap(chars);
    let totalLength = 0;

    for(let word of words){
        const wordFreq = getFreqMap(word);
        let canForm = true;

        for(let i=0; i< 26; i++){
            if(wordFreq[i] > charsFreq[i]){
                canForm = false;
                break;
            }
        }
        if(canForm){
            totalLength += word.length;
        }
    }
    return totalLength;
};
