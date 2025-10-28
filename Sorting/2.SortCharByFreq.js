var frequencySort = function(s) {
    let freq = {};
    for(let ch of s){
       freq[ch] = (freq[ch] || 0) + 1;
    }

    let sorted = Object.keys(freq).sort((a,b)=> freq[b] - freq[a]);

    let result = "";
    for(let ch of sorted){
        result += ch.repeat(freq[ch]);
    }
    return result;
};