var reverseWords = function(s) {
    let res = "";   // final reversed sentence
    let word = "";  // to store each word while scanning

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            word = s[i] + word; // build word from characters
        } else if (word !== "") {
            res += (res === "" ? "" : " ") + word; // add word to result
            word = ""; // reset for next word
        }
    }

    // Add the last word (if it exists)
    if (word !== "") {
        res += (res === "" ? "" : " ") + word;
    }

    return res;
};
