var numberOfSubstrings = function(s) {
    let count = 0;
    let i = 0;
    const freq = { a: 0, b: 0, c: 0 };

    for (let j = 0; j < s.length; j++) {
        freq[s[j]]++;

        // While window has all three characters
        while (freq['a'] > 0 && freq['b'] > 0 && freq['c'] > 0) {
            count += s.length - j; // all substrings from i to end with this j are valid
            freq[s[i]]--;
            i++;
        }
    }

    return count;
};