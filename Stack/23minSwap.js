// 1. Iterate over string.
// 2. Track unmatched '[' count via `size`.
// 3. If a ']' is found and there's an unmatched '[', cancel one out.
// 4. After traversal, use (size+1)/2 formula to compute swaps.
var minSwaps = function(s) {
    let size =0;

    for(const element of s){
         if(element === '['){
            size++;
         } else if(size !== 0){
            size--;
         }
    }

    return Math.floor((size+1) / 2 )
};