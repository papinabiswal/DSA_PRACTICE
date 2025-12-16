var longestEqualLettersDigits = function(s) {
    let prefix = 0;
    let map = new Map();
    map.set(0, -1);   // prefix sum 0 first seen at index -1 (important trick)

    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (/[a-zA-Z]/.test(ch)) {
            prefix += 1;    // letter
        } else if (/[0-9]/.test(ch)) {
            prefix -= 1;    // digit
        }

        if (map.has(prefix)) {
            maxLen = Math.max(maxLen, i - map.get(prefix));
        } else {
            map.set(prefix, i); // store first index for each prefix sum
        }
    }

    return maxLen;
};
longestEqualLettersDigits("a1b2c3d4e5f6g7h8i9j0");
