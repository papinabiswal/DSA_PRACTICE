// 1. If string length is odd → return false
// 2. Traverse the string:
//    - Push positions of '(' to open[]
//    - Push unlocked positions to openclose[]
//    - For each ')':
//      - Try matching with open[]
//      - Else use openclose[]
//      - Else return false
// 3. Use leftover openclose[] to match remaining open[]
//    - Only if open[i] < openclose[j]
// 4. Return true if no unmatched '(' left
var canBeValid = function(s, locked) {
    const n = s.length;

    if(n % 2 !== 0) return false;
    let open =[];
    let openclose =[];

    for(let i=0; i< n; i++){
       if(locked[i] === "0"){
          openclose.push(i)
       } else if(s[i] === '('){
           open.push(i);
       } else if(s[i] === ')'){
            if(open.length > 0){
                open.pop();
            } else if(openclose.length > 0){
                openclose.pop();
            } else {
                return false;
            }
       }
    }

    while(open.length > 0 && openclose.length > 0 && open[open.length -1] < openclose[openclose.length-1]){
        open.pop();
        openclose.pop();
    }
   return open.length === 0;
};

/// Optimised

// 1. Check if length is even.
// 2. First pass (left to right):
//    - Simulate balance with extra '(' or unlocked positions.
//    - Fail early if more ')' than '('.
// 3. Second pass (right to left):
//    - Simulate balance with extra ')' or unlocked positions.
//    - Fail early if more '(' than ')'.
// 4. If both passes succeed, return true.
var canBeValid = function(s, locked) {
    const n = s.length;

    if(n % 2 !== 0) return false;
    let open =0;
    for(let i=0; i<n; i++){
        if(s[i] === '(' || locked[i] === '0'){
            open++;
        } else {
            open--;
        }
        if(open < 0) return false;
    }

    let close =0;
    for(let i=n-1; i>=0; i--){
        if(s[i] === ')' || locked[i] === '0'){
            close++;
        } else {
            close--;
        }
        if(close < 0) return false;
    }
    return true;
};