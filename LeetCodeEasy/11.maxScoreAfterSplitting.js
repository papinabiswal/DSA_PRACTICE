var maxScore = function(s) {
    let totalOneCount = 0;

    let maxSum = -Infinity;

    for(let i =0; i< s.length; i++){
        if(s[i] === '1'){
           totalOneCount++;
        }
    }
    
    let zeroCount = 0;
    let leftOneCount = 0;
    for(let i=0; i < s.length-1; i++){  // stop before the last charcter
        if(s[i] === '0'){
            zeroCount++;
        } else {
            leftOneCount++;
        }
        let sum = (totalOneCount - leftOneCount) + zeroCount;
       maxSum = Math.max(maxSum, sum); 
    }
    return maxSum;
};