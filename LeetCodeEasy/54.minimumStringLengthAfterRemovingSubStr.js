var minLength = function(s) {
    const stack = [];
    for(let i=0; i< s.length; i++){
       let currChar = s[i];

       if(stack.length === 0){
           stack.push(currChar);
           continue; // go for next iteration;
       }

       let top = stack[stack.length-1];
       if((currChar === 'B' && top === 'A') ||
          (currChar === 'D' && top === 'C')){
             stack.pop();
       } else {
           stack.push(currChar);
       }
    }
    return stack.length;
};

// using two pointer
// O(1) space

var minLength = function(s) {
   let arr = s.split('');
   let n = s.length;
   let i=0;
   let j = 1;

    while(j < n){
        if(i < 0){
            i++;
            arr[i] = arr[j];
        } else if((arr[i] === 'A' && arr[j] === 'B') ||
                  (arr[i] === 'C' && arr[j] === 'D')) {
            i--;
        } else {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return i+1;
};

