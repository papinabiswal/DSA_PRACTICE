var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;

    return n%2=== 0 && isPowerOfTwo(n/2);
};

// using bit magic
var isPowerOfTwo = function(n) {
   return n > 0 && (n & (n-1)) === 0;
};