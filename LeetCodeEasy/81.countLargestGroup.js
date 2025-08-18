var countLargestGroup = function(n) {
    let maxSize = 0;
    let count = 0;
    let mp = {};
    for(let i =1; i<= n; i++){
       let digitSum = findDigitsSum(i);
       if (!mp[digitSum]) {
            mp[digitSum] = 0;
        }
       mp[digitSum]++
       if(mp[digitSum] === maxSize){
          count++;
       } else if(mp[digitSum] > maxSize) {
          maxSize = Math.max(maxSize, mp[digitSum]);
          count = 1;
       }
    }
    return count;
};
function findDigitsSum(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
