
function halfToPalindrome(left, even) {
    let resultNum = left;
    if (!even) {
        left = left / 10n;  // Integer division
    }

    while (left > 0n) {
        let digit = left % 10n;
        resultNum = (resultNum * 10n) + digit;
        left = left / 10n;  // Integer division
    }
    return resultNum;
}
var nearestPalindromic = function(n) {
    let len = n.length;
    let mid = Math.floor(len / 2);
    let firstHalf = BigInt(n.slice(0, len % 2 === 0 ? mid : mid + 1));

    let possibleResult = new Set();
    possibleResult.add(halfToPalindrome(firstHalf, len % 2 === 0));
    possibleResult.add(halfToPalindrome(firstHalf + 1n, len % 2 === 0));
    possibleResult.add(halfToPalindrome(firstHalf - 1n, len % 2 === 0));
    possibleResult.add(BigInt(10) ** BigInt(len - 1) - 1n);  // Edge case: 999...
    possibleResult.add(BigInt(10) ** BigInt(len) + 1n);      // Edge case: 100...001

    let diff = BigInt(Number.MAX_SAFE_INTEGER);
    let result = BigInt(0);
    let originalNum = BigInt(n);

    for (let num of possibleResult) {
        if (num === originalNum) continue;  // Fix the incorrect comparison
        let currDiff = num > originalNum ? num - originalNum : originalNum - num;
        if (currDiff < diff || (currDiff === diff && num < result)) {
            diff = currDiff;
            result = num;
        }
    }
    return result.toString();
};