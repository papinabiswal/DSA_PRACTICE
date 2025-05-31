// 1. Traverse each asteroid.
// 2. If stack is not empty and collision condition (top > 0 and ch < 0):
//    - Resolve collision using sum logic.
//    - Repeat if needed with new top of stack.
// 3. If ch survives, push to stack.
// 4. Return stack as result.

// Time: O(n)
// Space: O(n)

var asteroidCollision = function(asteroids) {
    let st =[];

    for(let ch of asteroids){

        // when collision will happen
          while(st.length && ch < 0 && st[st.length-1] > 0){
               let sum = ch + st[st.length-1];
               if(sum < 0){
                   // Stack asteroid is smaller, it explodes
                   st.pop();
               } else if( sum > 0){
                   // Current asteroid is smaller, it explodes
                   ch =0;
                   break;
               } else {
                // Both asteroids are equal, both explode
                   st.pop();
                   ch =0;
               }
          }

          if(ch !== 0){
            st.push(ch);
          }
    }
    return st;
};