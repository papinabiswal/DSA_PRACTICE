var maxConsecutiveAnswers = function(answerKey, k) {
    let n = answerKey.length;
    let result =0;

    // First pass: flip 'F' -> 'T'
    let i = 0, j = 0, countF = 0;
    while(j < n){
        if(answerKey[j] === 'F') countF++;
        
        while(countF > k){
            if(answerKey[i] === 'F'){
                countF--;
            }
            i++
        }
        result = Math.max(result, j-i+1);
        j++;
    }

    // Second pass: flip 'T' -> 'F'
     i = 0, j = 0, countT = 0;
    while(j < n){
        if(answerKey[j] === 'T') countT++;
        
        while(countT > k){
            if(answerKey[i] === 'T'){
                countT--;
            }
            i++
        }
        result = Math.max(result, j-i+1);
        j++;
    }

    return result;
};