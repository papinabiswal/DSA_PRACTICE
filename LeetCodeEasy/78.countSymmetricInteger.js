// bruteforce
var countSymmetricIntegers = function(low, high) {
    let count = 0;

    for(let num = low; num <= high; num++){
        let s = num.toString();
        let l = s.length;

        if(l % 2 !== 0) continue;
        let leftSum = 0;
        let rightSum = 0;

        for(let i=0; i< l/2; i++){
           leftSum += Number(s[i]);
        }
        for(let i=l/2; i< l; i++){
           rightSum += Number(s[i]);
        }

        if(leftSum === rightSum){
            count++;
        }
    }
    return count;
};

// optimised
function countSymmetricIntegers(low, high) {
    let count = 0;

    for (let num = low; num <= high; num++) {
        if (num >= 10 && num <= 99 && num % 11 === 0) {
            // 2-digit numbers divisible by 11 are symmetric
            count++;
        } else if (num >= 1000 && num <= 9999) {
            // 4-digit numbers: check left and right sums
            let first = Math.floor(num / 1000);
            let second = Math.floor(num / 100) % 10;
            let third = Math.floor(num / 10) % 10;
            let fourth = num % 10;

            if (first + second === third + fourth) {
                count++;
            }
        }
    }

    return count;
}
