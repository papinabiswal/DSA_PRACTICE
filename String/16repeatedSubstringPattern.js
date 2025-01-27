function repeatedSubstringPattern(s){
    const n = s.length;

    // Iterate through possible lengths of the substring
    for (let l = 1; l <= Math.floor(n / 2); l++) {

        // Check if the current length divides the string length
        if (n % l === 0) {
            const times = n / l;

            const pattern = s.substring(0, l);
            let newStr = "";

            // Build the new string by repeating the pattern
            for (let i = 0; i < times; i++) {
                newStr += pattern;
            }

            // Check if the constructed string matches the input string
            if (newStr === s) {
                return true;
            }
        }
    }

    return false;
}
repeatedSubstringPattern("abcabcabcabc");