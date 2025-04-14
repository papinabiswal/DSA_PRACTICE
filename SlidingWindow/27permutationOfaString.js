var checkInclusion = function(s1, s2) {
    const n = s1.length;
    const m = s2.length;

    if (n > m) return false;

    const s1Freq = Array(26).fill(0);
    const s2Freq = Array(26).fill(0);

    // Fill s1 frequency
    for (let i = 0; i < n; i++) {
        s1Freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let i = 0, j = 0;

    while (j < m) {
        s2Freq[s2.charCodeAt(j) - 'a'.charCodeAt(0)]++;

        if (j - i + 1 > n) {
            s2Freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
            i++;
        }

        if (arraysEqual(s1Freq, s2Freq)) {
            return true;
        }

        j++;
    }

    return false;
};

function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}