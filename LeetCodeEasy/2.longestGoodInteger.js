var largestGoodInteger = function(num) {
    let maxChar = -1;

    for(let i=2; i< num.length; i++){
        if(num[i] === num[i-1] && num[i] ===num[i-2]){
            let digit = parseInt(num[i]);
            maxChar = Math.max(maxChar, digit);
        }
    }
    return maxChar === -1 ? "" : maxChar.toString().repeat(3);
};