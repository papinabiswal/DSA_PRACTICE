var getHappyString = function(n, k) {
    let count =0;
    let result = "";
    function solve(curr) {
       if(curr.length === n){
          count++;
          if(count === k){
             result = curr;
          }
          return;
       }

       for(let ch of ['a','b', 'c']){
           if(curr.length > 0 && curr[curr.length-1] === ch){
            continue;
           }
           curr += ch;   // do
           solve(curr);
           curr = curr.slice(0,-1);
       }
    }
    solve("");
    return result;
};