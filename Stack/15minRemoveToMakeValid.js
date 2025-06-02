// 1. Split string into array ;
// 2. Traverse the array:
//    - Track `'('` using stack (store indices).
//    - For `')'`, match with stack if possible, else mark for removal.
// 3. After traversal, remove all unmatched `'('` using stack.
// 4. Join array and return the cleaned-up string.

var minRemoveToMakeValid = function(s) {
    let str = s.split("");
    let stack = [];

    for(let i=0; i< str.length; i++){
        if(str[i] === '('){
            stack.push(i)
        } else if(str[i] === ')'){
            if(stack.length){
              stack.pop();
            } else {
            str[i] = "";
            }
        } 
    }

    for(let i of stack){
       str[i] = "";
    }
    return str.join("");
};
// Time: O(n)
// Space: O(n)