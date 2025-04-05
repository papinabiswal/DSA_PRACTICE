// buttom up 
var partition = function(s) {
    let n = s.length;
    let t = Array.from({ length: n }, () => Array(n).fill(false));

    // Initialize the DP table for palindromic substrings
    for (let i = 0; i < n; i++) {
        t[i][i] = true; // A single character is always a palindrome
    }

    for (let L = 2; L <= n; L++) {
        for (let i = 0; i < n - L + 1; i++) {
            let j = i + L - 1;
            if (s[i] === s[j]) {
                if (L === 2) {
                    t[i][j] = true;
                } else {
                    t[i][j] = t[i + 1][j - 1];
                }
            }
        }
    }

    let result = [];
    let currPartition = [];

    function solve(i) {
        if (i === n) {
            result.push([...currPartition]);
            return;
        }

        for (let j = i; j < n; j++) {
            if (t[i][j]) { // Check if substring s[i...j] is a palindrome
                currPartition.push(s.substring(i, j + 1));
                solve(j + 1);
                currPartition.pop();
            }
        }
    }

    solve(0);
    return result;
};
