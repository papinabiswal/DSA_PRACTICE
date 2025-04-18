var maximum69Number  = function(num) {
    let digits = num.toString().split('')
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === '6') {
            digits[i] = 9
            break
        }
    }
    return Number(digits.join(''))
};

// IMP
var maximum69Number  = function(num) {

    let maxNum = num;
    let original = num;
    let place =1;

    while(num > 0){
      let digit = num % 10;
      if(digit === 6){
         maxNum = original + 3 * place;
      }
      num = Math.floor(num / 10);
      place *= 10;
    }
    return maxNum;
};