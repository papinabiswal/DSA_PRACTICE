var minSwaps = function(nums) {
    let totalOnes = nums.reduce((acc,val)=> acc + val , 0);
    let n = nums.length;
    let i=0;
    let j=0;
    let currCount =0;
    let maxCount = 0

    while(j < 2 *n){
       if(nums[j % n] === 1){
           currCount++;
       }

       if(j - i+1 > totalOnes){
         if(nums[i%n] === 1){
            currCount--;
         }
         i++;
       }
       maxCount = Math.max(maxCount, currCount);
       j++;
    }
    return totalOnes - maxCount;
};