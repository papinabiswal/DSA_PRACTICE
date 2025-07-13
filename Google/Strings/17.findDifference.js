var findTheDifference = function(s, t) {
    let lookup = {};
    for(let i=0; i< s.length; i++){
       let char = s[i];
       lookup[char] = (lookup[char] || 0) + 1;
    }

    for(let ch of t){
       if(!lookup[ch]){
            return ch;
       } else {
          lookup[ch] -= 1;
       }
    }
};


// by adding the ascii values of the characters
var findTheDifference = function(s, t) {
   let sum = 0;
   for(let ch of t){
       sum += ch.charCodeAt(0);
   }

   for(let ch of s){
      sum -= ch.charCodeAt(0);
   }
   return String.fromCharCode(sum);
};
findTheDifference("abcd", "abcde");

// by using bitwise XOR
// in xor same number will cancel out each other

var findTheDifference = function(s, t) {
   let xor = 0;
   for(let ch of t){
       xor ^= ch.charCodeAt(0);
   }

   for(let ch of s){
      xor ^= ch.charCodeAt(0);
   }
   return String.fromCharCode(xor);
};