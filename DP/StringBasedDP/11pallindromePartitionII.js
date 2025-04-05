function isPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

function solve(s, i, j) {
    if (i >= j) return 0;
    
    if (isPalindrome(s, i, j)) return 0;
    
    let part = Infinity;
    for (let k = i; k < j; k++) {
        let temp = 1 + solve(s, i, k) + solve(s, k + 1, j);
        part = Math.min(part, temp);
    }
    
    return part;
}
var minCut = function(s) {
     let n = s.length;
    return solve(s, 0, n - 1);
};