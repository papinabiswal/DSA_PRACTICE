
// Approach: Count the frequency of digits of n and compare it with frequency of digits of all power of 2 till 10^9
// Time complexity:
// O(1) – Only 31 iterations, each with fixed-length digit sorting (max 10 digits)

// Space complexity:
// O(1) – No large data structures; only small strings and loop variables used
var reorderedPowerOf2 = function(n) {

   function countDigit(s){
      return s.toString().split('').sort().join('');
   }
   let target = countDigit(n);

   for(let i =0; i< 30; i++){ // taking 30 because constraint is given 10 to power 9
      let powerOfTwo = 1 << i; // power of 2 using bit magic
      if(countDigit(powerOfTwo) === target){
           return true;
      }
   } 
   return false;
};