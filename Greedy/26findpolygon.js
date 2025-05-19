// - Sort the array to go from smallest to largest sides
// - Maintain cumulative sum of previous sides
// - For each new side, check: is it smaller than cumSum?
//   - If yes, it's a valid polygon, update perimeter
// - If no valid polygon was ever formed, return -1
// - Return perimeter

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