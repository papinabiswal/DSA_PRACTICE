// minAddToMakeValid("())(()")

// Step-by-step:

// '(' → open = 1

// ')' → open = 0

// ')' → open = 0, no match → close = 1

// '(' → open = 1

// '(' → open = 2

// ')' → open = 1

// ✅ Result = open + close = 1 + 1 = 2 → Need to add 1 '(' at the beginning or 1 ')' at the end.



var minAddToMakeValid = function(s) {
    let open =0, close =0;
    for(let c of s){
       if(c === '('){
          open++;
       } else if(!open){
           close++;
       } else {
          open--;
       }
    }
    return open + close;
};