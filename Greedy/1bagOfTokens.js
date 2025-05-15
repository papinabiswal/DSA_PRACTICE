// - Sort tokens
// - Play cheapest token if enough power → +score
// - Else, use 1 score to regain power from most expensive token → -score
// - Track max score
// - Stop when no move is possible
var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a,b)=> a-b);
    let currScore =0;
    let maxScore =0;

    let l=0, r = tokens.length-1;

    while(l <= r){
        if(power >= tokens[l]){
           power-= tokens[l];
           currScore++;
           maxScore = Math.max(maxScore, currScore);
           l++;
        } else if(currScore >= 1){
            power += tokens[r];
            currScore--;
            r--;
        } else {
            break;
        }
    }
    return maxScore;
};