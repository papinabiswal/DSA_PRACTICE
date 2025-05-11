// reverse a stack using auxilary stack
function reverseStack(stack){
    if(stack.length === 0){
        return;
    }

    const top = stack[stack.length-1];
    stack.pop();
    reverseStack(stack); // Recursively reverse the remaining stack

    // now push the top at the bottom of the stack
    const temp = [];
    while(stack.length !== 0){
        temp.push(stack[stack.length-1]);
        stack.pop();
    }
    stack.push(top);
    
    // Empty auxilarry stack
    while(temp.length !== 0){
       stack.push(temp[temp.length-1]);
       temp.pop();
    }
    return stack;
}
reverseStack([1, 2, 3, 4]);

