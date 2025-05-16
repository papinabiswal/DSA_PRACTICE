// - Convert number to string
// - Replace the first '6' with '9'
// - Convert back to number and return
// - Greedy because leftmost change gives max impact

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
// - Traverse digits from right to left
// - Keep track of the leftmost 6 using `index`
// - At the end, if found, do `num + 3 * 10^index` to flip 6 → 9
// - Efficient digit math, no string needed

var maximum69Number  = function(num) {
    let temp = num;
    let index =-1;
    let place = 0;

    while(temp > 0){
        let digit = temp % 10;
        if(digit === 6){
            index = place;
        }
        temp = Math.floor(temp / 10);
        place++
    }
    if(index === -1) return num;

    return num + 3 * Math.pow(10, index);
};