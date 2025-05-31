
// - Use a stack to hold characters.
// - For each char in string:
//    - If same as stack top → pop (remove duplicate)
//    - Else push char
// - Join and return stack content as string.

var removeDuplicates = function(s) {
    let stack = [];

    for (let ch of s) {
        if (stack.length > 0 && ch === stack[stack.length - 1]) {
            stack.pop(); // Remove the duplicate
        } else {
            stack.push(ch); // Only push if it's not a duplicate
        }
    }

    return stack.join('');
};
