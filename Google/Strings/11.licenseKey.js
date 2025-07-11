// first remove all the dash and convert to uppercase
// then reverse the string and add dash after
// every kth character

//TC: O(N)
//SC: O(N)
var licenseKeyFormatting = function(s, k) {
    // Remove dashes and convert to uppercase
    let cleaned = s.replace(/-/g, '').toUpperCase();

    let result = [];

    // Build the result from the end
    let count = 0;
    for (let i = cleaned.length - 1; i >= 0; i--) {
        result.push(cleaned[i]);
        count++;

        // Insert dash after every k characters (but not at the end)
        if (count === k && i !== 0) {
            result.push('-');
            count = 0;
        }
    }

    // Reverse to get final string
    return result.reverse().join('');
};
