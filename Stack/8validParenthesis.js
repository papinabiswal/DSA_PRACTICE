// 1. Initialize stack
// 2. For each character:
//    - If opening → push expected closing
//    - If closing → check match with top of stack
// 3. Return true only if stack is empty

// st.length === 0  this check inside loop for closing bracket;

// space complexity O(n)
// time complexity O(n)
var isValid = function(s) {
    let st =[]
   for(let ch of s){
       if(ch === '('){
           st.push(')');
       } else if(ch === '{'){
           st.push('}')
       } else if(ch === '['){
           st.push(']');
       } else if(st.length === 0 || ch !== st.pop()) {
           return false;
       }
   }
   return st.length === 0;
};