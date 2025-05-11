var isScramble = function(s1, s2) {
    // Base cases
    if (s1 === s2) return true;
    // Quick check: if sorted chars don't match, can't be a scramble
    if ([...s1].sort().join('') !== [...s2].sort().join('')) return false;

    let n = s1.length;

    for(let i=1; i < n; i++){

        // Case 1: No swap
        if(isScramble(s1.substring(0, i), s2.substring(0,i)) &&
           isScramble(s1.substring(i), s2.substring(i))){
              return true;
        }

        // Case 2: no Swap
        if(isScramble(s1.substring(0, i), s2.substring(n-i)) &&
           isScramble(s1.substring(i), s2.substring(0, n-i))){
              return true;
        }

    }
    return false;
};

// optimised and memo 
var isScramble = function(s1, s2) {
    const memo = new Map();

    function helper(a, b) {
        const key = a + ',' + b;
        if (memo.has(key)) return memo.get(key);

        if (a === b) {
            memo.set(key, true);
            return true;
        }

        if ([...a].sort().join('') !== [...b].sort().join('')) {
            memo.set(key, false);
            return false;
        }

        for (let i = 1; i < a.length; i++) {
            // Case 1: No swap
            if (helper(a.substring(0, i), b.substring(0, i)) &&
                helper(a.substring(i), b.substring(i))) {
                memo.set(key, true);
                return true;
            }

            // Case 2: Swap
            if (helper(a.substring(0, i), b.substring(b.length - i)) &&
                helper(a.substring(i), b.substring(0, b.length - i))) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    }

    return helper(s1, s2);
};