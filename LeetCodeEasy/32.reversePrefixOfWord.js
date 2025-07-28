var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);

    if(idx === -1) return word;
    let left = 0, right = idx;
    let arr = word.split('');
    while(left < right){
       [arr[left], arr[right]] = [arr[right], arr[left]];
       left++;
       right--;
    }
    return arr.join('');
};