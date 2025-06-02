var removeOccurrences = function(s, part) {
    const stack = [];
    const n = part.length;

    for (let ch of s) {
        stack.push(ch);

        // Check if the last n characters in stack match 'part'
        if (stack.length >= n) {
            let match = true;
            for (let i = 0; i < n; i++) {
                if (stack[stack.length - n + i] !== part[i]) {
                    match = false;
                    break;
                }
            }

            // If matched, remove last n characters
            if (match) {
                for (let i = 0; i < n; i++) {
                    stack.pop();
                }
            }
        }
    }

    return stack.join('');
};


//// Optimised

var removeOccurrences = function(s, part) {
    const stack =[];
    let n = part.length;

    for(const ch of s){
        stack.push(ch);
        if(stack.length >= n && stack.slice(-n).join('') === part){
            stack.length -= n
        }
    }
    return stack.join('');
};