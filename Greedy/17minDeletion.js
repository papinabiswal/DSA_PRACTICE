// - Count frequency of each character in array of size 26.
// - Use a Set to track frequencies already seen.
// - For each frequency:
//    - While it's already in the Set, reduce it (simulate deletions).
//    - Count each reduction in result.
//    - If frequency > 0 after fixing, add to Set.
// - Return result.

var minDeletions = function(s) {
    const freq = new Array(26).fill(0);
    const st = new Set();

    for(const ch of s){
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let result = 0;
    for(let i=0; i< 26; i++){
        while(freq[i] > 0 && st.has(freq[i])){
             freq[i]--;
             result++;
        }
        if(freq[i] > 0){
            st.add(freq[i]);
        }
    }
    return result;
};