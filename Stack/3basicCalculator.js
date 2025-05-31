// I/p : s = "(1+(4+5+2)-3)+(6+8)"
// O/p : 23
// - Read char by char:
//   - If digit → build number
//   - If '+' or '-' → commit previous number to result, set sign
//   - If '(' → push result & sign to stack, reset result/sign
//   - If ')' → finalize number inside (), then merge with popped context
// - Add final leftover number
// - Return result

var calculate = function(s) {
    const stack =[];
    let number = 0;
    let result =0;
    let sign = 1;

    for(let ch of s){
        if(!isNaN(ch) && ch !== ' '){
            number = number * 10 + parseInt(ch, 10);
        } else if(ch === '+'){
            result += sign * number;
            number =0;
            sign = 1;
        } else if( ch === '-'){
            result += sign * number;
            number =0;
            sign = -1;
        } else if(ch === '('){
             stack.push(result);
             stack.push(sign);
             result =0;
             number =0;
             sign =1;
        } else if(ch === ')'){
             result += sign * number;
             number =0;
             const prevSign = stack.pop();
             const prevResult = stack.pop();
             result = prevResult + prevSign * result;
        }
    }
    result += sign * number;
    return result;
};

calculate("1 + 1");