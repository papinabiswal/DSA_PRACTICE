// Count Beautifull substring
// take two variable(i, j) to find the the substring;
// check if the ch is vowel, increase vowelcount;
// else increase consonent count;
// check vowels == consonants.
// check (vowels * consonants) % k == 0
// if it satisfy both the condition increase the count;
// T.C : O(n^2)
// S.C : O(1)

function isVowel(ch){
    return "AEIOUaeiou".includes(ch);
}
function beautiful(s,k){
    let result =0;
    for(let i=0; i< s.length; i++){
        let con=0;
        let vwl= 0;
        for(let j=i; j< s.length; j++){
            if(isVowel(s[j])){
                vwl++;
            } else {
                con++;
            }

            if(con === vwl && ((con * vwl) % k === 0)) {
                result++;
            }
        }
    }
    return result;
}
beautiful("baeyh", 2);