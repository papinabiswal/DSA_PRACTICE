// 1. Initialize stack and two pointers i, j
// 2. Loop through pushed[i]:
//    - Push into stack
//    - While top of stack == popped[j]:
//        - Pop and move j++
// 3. After loop, check if stack is empty

// Time: O(n)
// Space: O(n)

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
var validateStackSequences = function(pushed, popped) {
    let n = pushed.length;
    let st =[];
    let i=0, j=0;

    while(i < n && j < n){
        st.push(pushed[i]);
        while(st.length !== 0 && st[st.length-1] === popped[j]){
           st.pop();
           j++
        }
        i++;
    }
    return st.length === 0;
};