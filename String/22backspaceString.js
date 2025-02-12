// Bruteforce solution 
// Tc: O(M+N)
// SC: O(M+N)
var backspaceCompare = function(s, t) {
    let temp1 = [];
  let temp2 = [];

  for(let i=0; i< s.length; i++){
    if(s[i] === '#'){
      if(temp1.length > 0){
         temp1.pop();
      }
    } else {
      temp1.push(s[i]);
    }
  }

  for(let i=0; i< t.length; i++){
    if(t[i] === '#'){
      if(temp2.length > 0){
         temp2.pop();
      }
    } else {
      temp2.push(t[i]);
    }
  }
  return temp1.join('') === temp2.join('');
};

// optimised
// start from last index
// Tc: O(M+N)
// SC: O(1)
var backspaceCompare = function(s, t) {
  function generateNextValidChar(str, index) {
      let backspaceCount = 0;
      while (index >= 0) {
          if (str[index] === '#') {
              backspaceCount++;
              index--;
          } else if (backspaceCount > 0) {
              backspaceCount--;
              index--;
          } else {
              break;
          }
      }
      return index;
  }

  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
      i = generateNextValidChar(s, i);
      j = generateNextValidChar(t, j);

      if (i < 0 && j < 0) return true;  // Both strings are fully processed
      if (i < 0 || j < 0) return false; // One string has extra valid characters

      if (s[i] !== t[j]) return false;

      i--;
      j--;
  }

  return true;
};