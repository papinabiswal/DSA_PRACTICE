//TC: O(n)
//SC: O(n)
var buddyStrings = function(s, goal) {

    if (s.length !== goal.length) return false;
 
     // If 's' is already equal to 'goal', check if there are duplicate characters in 's' (indicating a valid swap).
     if (s === goal) {
         const set = new Set(s);
         return set.size < s.length;
     }
 
     // Find the positions where 's' and 'goal' differ, and ensure there are exactly two differences.
     const diff = [];
     for (let i = 0; i < s.length; i++) {
         if (s[i] !== goal[i]) diff.push(i);
         if (diff.length > 2) return false;
     }
 
     // If there are exactly two differences, check if swapping them makes 's' equal to 'goal'.
     return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
 };

 ////////////////////////////
 //TC: O(n)
//SC: O(1)
 var buddyStrings = function(s, goal) {

    const checkFreq = (str) => {
        const freq = new Array(26).fill(0);

        for (const ch of str) {
            freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;

            if (freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)] > 1) {
                return true; // If any character appears more than once
            }
        }

        return false;
    };

    if (s.length !== goal.length) return false;
 
     // If 's' is already equal to 'goal', check if there are duplicate characters in 's' (indicating a valid swap).
     if (s === goal) {
         return checkFreq(s);
     }
 
     // Find the positions where 's' and 'goal' differ, and ensure there are exactly two differences.
     const diff = [];
     for (let i = 0; i < s.length; i++) {
         if (s[i] !== goal[i]) diff.push(i);
         if (diff.length > 2) return false;
     }
 
     // If there are exactly two differences, check if swapping them makes 's' equal to 'goal'.
     return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
 };