// remove duplicate letter from the sentence lexicographically
// keep an array of 26 letter which will keep index the value is, mark them first 0;
// keep an array of 26 letter which will indicate the value is there or not, mark them all as false;
// take a result variable , which will store after removing the duplicate letter
// TC: O(n)
// SC: O(1)

function removeDuplicateLetters(s) {
    const n = s.length;
    let result = "";

    const taken = new Array(26).fill(false); // Tracks if a character is already in the result
    const lastIndex = new Array(26).fill(0); // Stores the last index of each character

    // Fill the lastIndex array
    for (let i = 0; i < n; i++) {
        const ch = s[i];
        lastIndex[ch.charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }

    // Iterate over the string
    for (let i = 0; i < n; i++) {
        const idx = s[i].charCodeAt(0) - 'a'.charCodeAt(0);

        // Skip the character if it's already taken
        if (taken[idx]) continue;

        // Remove characters from the result that are lexicographically greater
        // and have occurrences later in the string
        while (
            result.length > 0 &&
            s[i] < result[result.length - 1] &&
            lastIndex[result[result.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > i
        ) {
            taken[result[result.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] = false;
            result = result.slice(0, -1);
        }

        // Add the current character to the result and mark it as taken
        result += s[i];
        taken[idx] = true;
    }

    return result;
}

// Example usage
console.log(removeDuplicateLetters("bcabc")); // Output: "abc"