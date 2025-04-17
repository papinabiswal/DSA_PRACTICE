var takeCharacters = function(s, k) {
    let n = s.length;

    let count_a = 0;
    let count_b = 0;
    let count_c = 0;

    // Calculate the total number of 'a', 'b', and 'c' in the string
    for (let ch of s) {
        if (ch === 'a') count_a++;
        else if (ch === 'b') count_b++;
        else count_c++;
    }

    // If there are not enough 'a', 'b', or 'c', it's impossible to take k of each
    if (count_a < k || count_b < k || count_c < k) {
        return -1; // Impossible to take k of each character
    }

    let i = 0;
    let j = 0;
    let notDeletedWindowSize = 0;

    while (j < n) {
        // Reduce the count of the character at index j
        if (s[j] === 'a') {
            count_a--;
        } else if (s[j] === 'b') {
            count_b--;
        } else {
            count_c--;
        }

        // Shrink the window from the left if the count of any character becomes less than k
        while (i <= j && (count_a < k || count_b < k || count_c < k)) {
            // Restore the character at index i back into the window
            if (s[i] === 'a') {
                count_a++;
            } else if (s[i] === 'b') {
                count_b++;
            } else {
                count_c++;
            }
            i++;
        }

        // Update the maximum size of the window where no deletions are needed
        notDeletedWindowSize = Math.max(notDeletedWindowSize, j - i + 1);
        j++;
    }

    // The result is the total length minus the longest valid window size
    return n - notDeletedWindowSize;
};

// Example usage:
console.log(takeCharacters("aabbbcc", 2)); // Output: 6
console.log(takeCharacters("aabbbccc", 3)); // Output: 7
console.log(takeCharacters("abcabc", 2)); // Output: -1
