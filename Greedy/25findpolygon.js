var largestPerimeter = function(nums) {
    nums.sort((a,b)=> a-b);

    let perimeter =0;
    let cumSum =0;

    for(let i=0; i< nums.length; i++){
        if(nums[i] < cumSum){
            perimeter = cumSum + nums[i];
        }
        cumSum += nums[i];
    }
    return perimeter === 0 ? -1 : perimeter;
};