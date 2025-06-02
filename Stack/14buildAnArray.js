// 1. Initialize i = 0 (for target), stream = 1.
// 2. While i < target.length and stream <= n:
//    - Always Push stream
//    - If target[i] == stream → i++
//    - Else → Pop it
//    - stream++
// 3. Return stack of operations

var buildArray = function(target, n) {
    let stack =[];
    let stream = 1;
    let i=0

    while(i < target.length && stream <= n){
         stack.push("Push");

         if(target[i] === stream){
            i++;
         } else {
            stack.push("Pop");
         }
         stream++;
    }
    return stack;
};
// Time: O(n)
// Space: O(n)