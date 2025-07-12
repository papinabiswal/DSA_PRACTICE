// reverse str 2
// TC: O(n)
// SC: O(n)
var reverseStr = function(s, k) {
    let arr = s.split('');

    for(let i=0; i< arr.length; i+= 2 * k){
       let left = i;
       let right = Math.min(i+k-1, arr.length-1);

       while(left < right){
           [arr[left], arr[right]] = [arr[right], arr[left]];
           left++;
           right--;
       }
    }
    return arr.join('');
};



// reverse str 1
var reverseString = function(s) {
    let left =0; let right = s.length-1;

    while(left < right){
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};