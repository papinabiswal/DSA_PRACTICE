// very easy just understand the story.
// k can not be less than number, if less then resun -1;
// but num is greater than k the return the unique element num;
var minOperations = function(nums, k) {
    let st = new Set();
    for(let x of nums){
       if(x < k){
           return -1
       } else if(x > k){
          st.add(x);
       }
    }
    return st.size;
};