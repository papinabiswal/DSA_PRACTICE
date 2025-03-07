// let count and sustr is 0;
// earlier count is 0, once find match substr will (1+0), increase count
// if again find match (1+1) 1->countvql
// if again find match (1+2) 2-> count val
// add them all in substr;
// (1+0)+(1+1)+(1+2) =6 sum of first n natural num
// TC: O(n)
// SP: O(1)
var countSubstrings = function(s, c) {
    let count =0;
    let substr =0;
    for(let i=0; i< s.length; i++){
        if(s[i] === c){
           substr += (1+count);
           count++;
        }
    }
    return substr;
};
countSubstrings("abada", "a");