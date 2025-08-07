var makeFancyString = function(s) {
    let stack = [];
    for(let i=0; i< s.length; i++){
       let len = stack.length;
       if(len >= 2 && s[i] === stack[len-1] && s[i] === stack[len-2]){
           continue;
       }
       stack.push(s[i]);
    }
    return stack.join('');
};

// using pointer
var makeFancyString = function(s) {
     const arr = s.split('');  // convert to array for in-place write
    let i = 0;  // write pointer

    for (let j = 0; j < s.length; j++) {
        // If last two written characters are same as current, skip it
        if (i >= 2 && arr[i - 1] === s[j] && arr[i - 2] === s[j]) {
            continue;
        }

        arr[i] = s[j];  // write current character
        i++;            // move write pointer
    }

    return arr.slice(0, i).join('');
};