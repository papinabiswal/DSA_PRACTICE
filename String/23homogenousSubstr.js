//s = "abbcccaa"
// run a loop, check the curr and prev char are same , if yes increse count else reset count to one;
// and add the count to the result variable;
// let 3 time C, so 1+2+3(6) times homogenous will get

var countHomogenous = function(s) {
    const MOD = 1e9+7;
    let result =0;
    let count = 0;
    for(let i=0; i < s.length; i++){
        if(i > 0 && s[i] === s[i-1]){
           count++;
        } else {
            count = 1;
        }
      result = (result+count)% MOD;
    }
    return result;
};