// Right Most bit = (num & 1);
// Right shift = (num >> 1)
var minFlips = function(a, b, c) {
    let flip = 0;
    while(a !== 0 || b !== 0 || c !== 0){
       if(c&1 === 1){
           if((a&1) === 0 && (b&1) === 0){
              flip++;
           } 
       } else {
           flip += (a&1) + (b&1);
       }
       a >>= 1;
       b >>=1;
       c >>=1;
    }
    return flip;
};