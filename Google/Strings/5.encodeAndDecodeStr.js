// Design an algorithm to encode a list of strings to a single string.
// Then decode that string back to the original list of strings.

// encode(["hello", "world"]) => "5#hello5#world"
// decode("5#hello5#world") => ["hello", "world"]

function encode(strs) {
    return strs.map(s => s.length + '#' + s).join('');
}

function decode(s) {
    let res = [];
    let i = 0;

    while (i < s.length) {
        let j = i;

        // Find the delimiter #
        while (s[j] !== '#') {
            j++;
        }

        let len = parseInt(s.slice(i, j)); // extract number
        let word = s.slice(j + 1, j + 1 + len);
        res.push(word);

        i = j + 1 + len;
    }

    return res;
}
