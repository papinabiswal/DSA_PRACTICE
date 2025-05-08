var minFlipsMonoIncr = function(s) {
    const n = s.length;
    function solve(curr_index, prev_val) {
       if (curr_index >= n) return 0;
       
       let flip = Infinity;
       let no_flip = Infinity;

       if(s[curr_index] === '0'){
           if(prev_val === 1){
             flip = 1 + solve(curr_index+1, 1);
           } else {
              flip = 1 + solve(curr_index+1, 1);
              no_flip = solve(curr_index+1, 0);
           }
       } else if(s[curr_index] === '1'){
           if(prev_val === 1){
               no_flip = solve(curr_index+1, 1);
           } else {
              flip = 1 + solve(curr_index+1, 0);
              no_flip = solve(curr_index+1, 1);
           }
       }
       return Math.min(flip, no_flip);
    }
    return solve(0, 0);
};


// buttom up approach


var minFlipsMonoIncr = function(s) {

    let countOfOnes = 0;
    let flip =0;

    for(let ch of s){
       if(ch === '1'){
          countOfOnes++;
       } else {
           flip = Math.min(1+flip, countOfOnes);
       }
    }
    return flip;
};
