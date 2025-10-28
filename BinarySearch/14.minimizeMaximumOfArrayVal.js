var minimizeArrayValue = function(nums) {
    let left = 0;
    let right = Math.max(...nums);

    function isValid(maxVal){
        let sum = 0;
       for(let i =0; i< nums.length; i++){
           sum += nums[i];
           if(Math.ceil(sum/(i+1)) > maxVal) return false;
       }
       return true;
    }

    while(left < right){
        let mid = Math.floor((left+right)/2);

        if(isValid(mid)){
           right = mid;
        } else {
            left = mid+1;
        }
    }
    return left;
};