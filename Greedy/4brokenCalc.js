// - If start ≥ target → subtract to reach
// - If target is even → divide by 2 (reverse of *2)
// - If target is odd → add 1 to make it even

var brokenCalc = function(startValue, target) {
    if(startValue >= target){
        return startValue - target;
    }
    if(target % 2 === 0){
       return 1 + brokenCalc(startValue, target/2);
    }
    return 1 + brokenCalc(startValue, target+1);
};