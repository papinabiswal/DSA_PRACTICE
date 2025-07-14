/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const count = {};
    
    // Build frequency map for string t
    for (let char of t) {
        count[char] = (count[char] || 0) + 1;
    }

    let requiredCount = t.length;
    let i = 0, j = 0;
    let minL = Infinity;
    let start = -1;

    while (j < s.length) {
        let endChar = s[j];
        if (count[endChar] > 0) {
            requiredCount--;
        }
        count[endChar] = (count[endChar] || 0) - 1;

        // Try to shrink the window from the left
        while (requiredCount === 0) {
            if (j - i + 1 < minL) {
                minL = j - i + 1;
                start = i;
            }

            let startChar = s[i];
            count[startChar] = (count[startChar] || 0) + 1;
            if (count[startChar] > 0) {
                requiredCount++;
            }

            i++;
        }

        j++;
    }

    return start === -1 ? '' : s.slice(start, start + minL);
};