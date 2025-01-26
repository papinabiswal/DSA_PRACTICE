// find the largest variance of substring
//you can select any two character
//IP: abaaa
// find the freq of F(a) then F(b); and take a result variable keep count
// find the freq of 2nd one should be always greater than 0
// if the diff give negative val , make both the freq 0
// keep the max variance of substring in result variable
// TC: O(26 * 26 * n)
// SC: O(1)
var largestVariance = function(s) {
    const count = new Array(26).fill(0);

        // Count the frequency of each character in the string
        for (const ch of s) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let result = 0;

        // Iterate over all pairs of characters
        for (let first = 0; first < 26; ++first) {
            for (let second = 0; second < 26; ++second) {

                if (count[first] === 0 || count[second] === 0 || first === second) {
                    continue;
                }

                let firstCount = 0;
                let secondCount = 0;
                let pastLowFreq = false;

                for (const ch of s) {
                    if (ch.charCodeAt(0) - 'a'.charCodeAt(0) === first) {
                        ++firstCount;
                    }
                    if (ch.charCodeAt(0) - 'a'.charCodeAt(0) === second) {
                        ++secondCount;
                    }

                    if (secondCount > 0) {
                        result = Math.max(result, firstCount - secondCount);
                    } else if (pastLowFreq) {
                        result = Math.max(result, firstCount - 1);
                    }

                    if (secondCount > firstCount) {
                        secondCount = 0;
                        firstCount = 0;
                        pastLowFreq = true;
                    }
                }
            }
        }

        return result;
};