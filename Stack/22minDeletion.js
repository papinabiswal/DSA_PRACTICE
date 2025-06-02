var minimumDeletions = function(s) {
    let count =0;
    let stack =[];

    for(const element of s){
        // if stack is not empty and current element is 'a' and top of stack is 'b'
        if(stack.length > 0 && element === 'a' && stack[stack.length-1] === 'b'){
           stack.pop();
           count++;
        } else {
            stack.push(element);
        }
    }
    return count;
};

// optimised
function minimumDeletions(s) {
    let bCount = 0;  // Number of 'b's seen so far
    let deletions = 0;

    for (let ch of s) {
        if (ch === 'a') {
            if (bCount > 0) {
                // Delete this 'a' to avoid 'ba' pattern
                deletions++;
                // We can imagine removing one 'b' to balance, so decrement bCount
                bCount--; 
            }
        } else {
            // ch === 'b'
            bCount++;
        }
    }

    return deletions;
}
