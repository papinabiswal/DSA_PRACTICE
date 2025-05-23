var isZeroArray = function(nums, queries) {
    
    const n = nums.length;
    const diff = new Array(n).fill(0);

    for(const [start, end] of queries){
        diff[start] += 1;

        if(end+1 < n){
          diff[end+1] -= 1;
        }
    }

    for(let i=1; i<n; i++){
         diff[i] += diff[i-1];
    } 

     for (let i = 0; i < n; i++) {
        if(nums[i] - diff[i] > 0 ){
            return false;
        }
     }
     return true;
};