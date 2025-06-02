// 1. Use a stack to build the result greedily.
// 2. Remove digits that are bigger than the next digit.
// 3. If k still > 0, remove remaining from end.
// 4. Remove leading zeros.
// 5. Return final number.

var removeKdigits = function(num, k) {
    let stack =[];

    for(const element of num){
        while(stack.length && element < stack[stack.length-1] && k>0){
           stack.pop();
           k--;
        }
        stack.push(element);
    }

    // If still k digits to remove, remove from the end
    while (k > 0) {
        stack.pop();
        k--;
    }

    while (stack.length && stack[0] === '0') {
        stack.shift();
    }
    return stack.length === 0 ? "0" : stack.join('');
};