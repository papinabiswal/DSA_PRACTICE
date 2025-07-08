var findMaxConsecutiveOnes = function(nums) {
    let maxLength = 0;
    let currOnes = 0
    for(const element of nums){
          if(element === 0){
             currOnes = 0;
          } else {
            currOnes++
          }
         maxLength = Math.max(maxLength, currOnes); 
    }
    return maxLength;
};

// 1004. Max Consecutive Ones III
var longestOnes = function(nums, k) {
    let i=0;
    let j=0;

    while(j < nums.length){
        if(nums[j] === 0){
           k--;
        }

        if(k < 0){
            if(nums[i]  === 0){
                k++;
            }
            i++;
        }
        j++;
    }
    return j-i;
};

// 128. Longest Consecutive Sequence
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for(let num of numSet){
        if(!numSet.has(num-1)){
             let currNum = num;
             let currCount = 1;
             while(numSet.has(currNum+1)){
                currNum++;
                currCount++;
             }
             longest = Math.max(longest, currCount);
        }
    }
    return longest;
};