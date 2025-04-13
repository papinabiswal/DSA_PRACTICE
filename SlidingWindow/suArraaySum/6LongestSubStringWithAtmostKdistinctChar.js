// Longest Substring with At Most K Distinct Characters
function lengthOfLongestSubstringKDistinct(s, k) {
    if (k === 0) return 0;

    let left = 0, right = 0;
    let maxLength = 0;
    const charMap = new Map();

    while (right < s.length) {
        const char = s[right];
        charMap.set(char, (charMap.get(char) || 0) + 1);

        while (charMap.size > k) {
            const leftChar = s[left];
            charMap.set(leftChar, charMap.get(leftChar) - 1);
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
}
