var minCost = function(nums, cost) {
    let left = Math.min(...nums);
    let right = Math.max(...nums);

    function getCost(target){
       let total = 0;
       for(let i = 0; i< nums.length; i++){
          total += Math.abs(nums[i] - target) * cost[i];
       }
       return total;
    }
    while(left < right){
        let mid = Math.floor((left + right)/2);
        if(getCost(mid) < getCost(mid+1)){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return getCost(left);
};