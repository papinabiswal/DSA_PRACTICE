// make the string great here means , you have to remove same letter of (Aa) you have to remove from the sentence
// a = 97, A = 65 ;
// difference between (A) and (a) is 32
// if it's 32 then remove from the result, else add in result;
// TC: O(n), SC: O(n)

function stringGreat(s){
    let result =[];
    for(let ch of s){
       if(result.length > 0 && Math.abs(ch.charCodeAt(0) - result[result.length-1].charCodeAt(0)) === 32){
           result.pop();
       } else {
           result.push(ch);
       }
    }
    return result.join('');
}
stringGreat("leEeetcode");