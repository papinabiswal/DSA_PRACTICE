var maxScoreWords = function(words, letters, score) {
    let maxScore =0;
    let n = words.length;

    let freq = new Array(26).fill(0);
    for(let ch of letters){
       freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    function backtrack(idx, currScore, freq){
        maxScore = Math.max(maxScore, currScore);
        if(idx >= n) return;

        let tempFreq = [...freq];
        let j = 0, tempScore = 0;

        // Check if we can take words[i]
        for(let ch of words[idx]){
             tempFreq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]--;
             tempScore += score[ch.charCodeAt(0) - 'a'.charCodeAt(0)];

             if(tempFreq[ch.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) break;
             j++;
        }

        // Take words[i] if it's fully formed
        if(j === words[idx].length){
           backtrack(idx+1, tempScore + currScore, tempFreq);
        }

        // Not take words[i]
        backtrack(idx+1,  currScore, freq);
    }
     backtrack(0,0,freq);
     return maxScore;
};