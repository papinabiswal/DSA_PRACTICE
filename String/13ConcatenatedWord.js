// if the concatenated word present in the given array, return them all
// I/p = ["cat","dog","catdog"]
//o/p = ["catdog"]
// create a set and put all word
// run a loop for each word, check if isConcatenated ?
// find prefix and suffix
// check prefix is present in set and isConcatenated suffix or prefix and suffix all present in set then return true else false;
// return result.
// TC: O(N⋅L2) -> N-Number of words in word array, L-> avg length of each word
// SC: O(N.L)

var findAllConcatenatedWordsInADict = function(words) {
    const n = words.length;
    const memo = new Map();
    const wordSet = new Set(words);

    const isConcat = (word) => {
        // If the result is already memoized, return it
        if (memo.has(word)) return memo.get(word);

        const len = word.length;

        for (let i = 0; i < len; i++) {
            const prefix = word.slice(0, i + 1);
            const suffix = word.slice(i + 1);

            // Check if the prefix and suffix can form a concatenated word
            if ((wordSet.has(prefix) && isConcat(suffix)) ||
                (wordSet.has(prefix) && wordSet.has(suffix))) {
                memo.set(word, true);
                return true;
            }
        }

        // If no valid concatenation is found, memoize and return false
        memo.set(word, false);
        return false;
    };

    const result = [];

    for (const word of words) {
        if (isConcat(word)) {
            result.push(word);
        }
    }

    return result;
};