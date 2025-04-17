var brokenCalc = function(startValue, target) {
    if(startValue >= target){
        return startValue - target;
    }
    if(target % 2 === 0){
       return 1 + brokenCalc(startValue, target/2);
    }
    return 1 + brokenCalc(startValue, target+1);
};