// Determine if Two Strings Are Close
// two string close means the frequency of letter would be same like below 
// {a:1,b:3, c:2}, {a:1,b:2, c:3}
//order doesn't matter
//TC: O(N)
//SC:O(1)
function closeString(word1, word2){
    if(word1.length !== word2.length) return false
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for(let ch of word1){
       freq1[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let ch of word2){
       freq2[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i=0; i<26; i++){
       if((freq1[i] === 0 && freq2[i] !== 0) || (freq2[i] === 0 && freq1[i] !== 0)){
        return false;
       }
    }
    freq1.sort((a,b)=> a-b);
    freq2.sort((a,b)=> a-b);

    for(let i=0; i< 26; i++){
        if(freq1[i] !== freq2[i]){
            return false;
        }
    }
    return true;
}
closeString("abc", "bca");  