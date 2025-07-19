// Kth Missing Positive Number
var findKthPositive = function(arr, k) {
    let curr = 1;
    let i = 0;
    let missingCount = 0;

    while(missingCount < k){
       if(i < arr.length && arr[i] === curr){
          i++;
       } else {
           missingCount++;
           if(missingCount === k) return curr;
       }
       curr++;
    }
};


// Binary Search

var findKthPositive = function(arr, k) {
    let left = 0, right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        let missing = arr[mid] - (mid+1);
        if(missing < k){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    return left+k;
};