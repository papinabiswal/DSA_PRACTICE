// ## longestPalindrome (Hash Map + Greedy)
// - Count frequency of all words
// - Pair up reversed words like "ab" + "ba"
// - Use symmetric words like "aa" in pairs
// - If one symmetric word is left, use it at the center
// - Each pair contributes 4 characters, center adds 2
var longestPalindrome = function(words) {
    let freq = {};

    for(let word of words){
       freq[word] = (freq[word] || 0) +1
    }

    let result =0;
    let isCenterUsed = false;

    for(const word of words){
        let rev = word[1] + word[0];
       if(rev !== word){  // if word is not symmetric like "aa" or "bb"
           if(freq[word] > 0 && freq[rev] > 0){
              result += 4;
              freq[word]--;
              freq[rev]--;
           }
       } else {
          if(freq[word] >= 2){
             freq[word] -= 2;
             result += 4;
          } else if(freq[word] === 1 && !isCenterUsed) {
             freq[word]--;
            result += 2;
            isCenterUsed = true;
          }
       }
    }
    return result;
};