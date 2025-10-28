var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;

    return n%2=== 0 && isPowerOfTwo(n/2);
};

// using bit magic
var isPowerOfTwo = function(n) {
   return n > 0 && (n & (n-1)) === 0;
};


// Powers of two have only one 1 bit in binary.
// e.g. 1=0001, 2=0010, 4=0100, 8=1000

// Subtracting 1 flips that 1 and makes all lower bits 1.
// Example: 8 (1000) → 7 (0111)

// Doing n & (n-1) clears the only set bit → always 0 for powers of two.