function substrCountWithKDistinct(s, k) {
    function atMostKDistinct(s, k) {
        let count = new Map();
        let left = 0, res = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            count.set(char, (count.get(char) || 0) + 1);

            while (count.size > k) {
                let leftChar = s[left];
                count.set(leftChar, count.get(leftChar) - 1);
                if (count.get(leftChar) === 0) count.delete(leftChar);
                left++;
            }

            res += right - left + 1;
        }
        return res;
    }

    return atMostKDistinct(s, k) - atMostKDistinct(s, k - 1);
}
