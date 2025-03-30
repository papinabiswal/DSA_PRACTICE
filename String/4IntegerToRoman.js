// Time complexity : O(1) the number of roman symbol is fixed which is 13(sym.length)
// Space complexity: O(1) space complexity is also constant
// first check number is greater than 0
// check num is greater or equal to the given val;
// then do the substraction from the numer which will be the remainder
// add that symbol value to the result;


function intToRoman(num){
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result ="";
    let i=0;

    while(num > 0){
        while(num >= val[i]){
            num -= val[i];
            result += sym[i];
        }
        i++;
    }
    console.log(result);
    return result;
}
intToRoman(58);

// OR

function solution(num){
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result ='';
    for(let i=0; i< val.length; i++){
        while(val[i] <= num){
            num -= val[i];
            result += sym[i];
        }
    }
    return result;
}
solution(58);

//OR
function intToRoman(num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const sym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let result = "";
    let i = 0;

    while (num > 0) {
        if (num >= val[i]) {
            num -= val[i];
            result += sym[i];
        } else {
            i++; // Move to the next numeral only if the current one can't be used
        }
    }
    
    console.log(result);
    return result;
}

intToRoman(58);
