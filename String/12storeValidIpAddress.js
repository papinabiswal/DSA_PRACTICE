// cannot have leading 0
// separate into 4 integers by inserting dots
// can't reorder or sort digits
// each segment's length should be less than or equal to 3
// 1. Check if the current segment is less than or equal to 255.  
// 2. Check if the length of the segment is 1. The first character of the segment 
//    can be `0` only if the length of the segment is 1.

var restoreIpAddresses = function(s) {
    let result =[];
    let n = s.length;
     
    if (n < 4 || n > 12) return result;
     const isValid = (str) => {
        if (str[0] === '0') return false; // Leading 0 is not valid
        const val = parseInt(str, 10);
        return val <= 255;
    };
    const solve = function(s, idx, part, curr){
        if(idx === n && part === 4){
           result.push(curr.slice(0,-1));
           return;
        }


        // Check for one-digit segment
        if(idx+1 <= n){
        solve(s, idx+1, part+1, curr+s.slice(idx, idx+1) + ".");
        }

        // Check for two-digit segment
        if(idx+2 <= n && isValid(s.slice(idx, idx+2))){
        solve(s, idx+2, part+1, curr+s.slice(idx, idx+2) + ".");
        }

        // Check for three-digit segment
        if(idx+3 <= n && isValid(s.slice(idx, idx+3))){
        solve(s, idx+3, part+1, curr+s.slice(idx, idx+3) + ".");
        }
    }
    solve(s,0,0,"");
   return result;
};
restoreIpAddresses();