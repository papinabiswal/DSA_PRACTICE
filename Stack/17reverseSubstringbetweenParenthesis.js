//this is my thought process
// 1. Initialize an empty stack.
// 2. Traverse each character in the string.
// 3. If the character is '(', push its index onto the stack.
// 4. If the character is ')', pop the top index from the stack and reverse the substring between the popped index and the current index.
// 5. After processing all characters, remove all parentheses from the string.
// 6. Return the modified string.

// Time: O(n^2)
// Space: O(n)

var reverseParentheses = function(s) {
    let stack =[];
    let arr = s.split('');

    for(let i=0; i< arr.length; i++){
         if(s[i] === '('){
            stack.push(i)
         } else if(s[i] === ')'){
              let openIdx = stack.pop();
              
              let left = openIdx+1;
              let right = i-1;
              while(left < right){
                 [arr[left], arr[right]] = [arr[right], arr[left]];
                 left++;
                 right--;
              }
         }
    }
    return arr.filter(ch=> ch !== '(' && ch !== ')').join('');
};

// Optimised
