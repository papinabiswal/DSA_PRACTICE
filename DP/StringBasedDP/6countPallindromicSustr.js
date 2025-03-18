// recursion

function isPallindrome(s,i,j){
    if(i > j) return true;

    if(s[i] === s[j]){
        return isPallindrome(s, i+1, j-1)
    }
    return false;
}

var countSubstrings = function(s) {
    let n = s.length;
    let count =0;

    for(let i=0; i< s.length; i++){
       for(let j=i; j< s.length; j++){
           if(isPallindrome(s,i,j)){
             count++;
           }
       }
    }
    return count;
};

// recursion + memo
var countSubstrings = function(s) {
    let n = s.length;
    let count = 0;
    let dp = new Array(n).fill(null).map(() => new Array(n).fill(undefined));

    function isPalindrome(i, j) {
        if (i >= j) return true; // Base case: Single char or empty substring is always a palindrome
        if (dp[i][j] !== undefined) return dp[i][j]; // Return memoized result

        if (s[i] === s[j]) {
            dp[i][j] = isPalindrome(i + 1, j - 1);
        } else {
            dp[i][j] = false;
        }
        return dp[i][j];
    }

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (isPalindrome(i, j)) {
                count++;
            }
        }
    }
    return count;
};

// Buttom up with blue print
var countSubstrings = function(s) {
    let n = s.length;
    let dp = new Array(n).fill(null).map(() => new Array(n).fill(false));
    let count = 0;

    for (let L = 1; L <= n; L++) { // Length of substring
        for (let i = 0; i + L - 1 < n; i++) {
            let j = i + L - 1;

            if (i === j) {
                dp[i][i] = true; // Single characters are palindromes
            } else if (i + 1 === j) {
                dp[i][j] = (s[i] === s[j]); // Two-character case
            } else {
                dp[i][j] = (s[i] === s[j]) && dp[i + 1][j - 1]; // General case
            }

            if (dp[i][j]) count++; // Increment count if palindrome found
        }
    }
    
    return count;
};