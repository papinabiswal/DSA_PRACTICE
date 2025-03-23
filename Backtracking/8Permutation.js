var permute = function(nums) {
    let result =[];
    let n = nums.length;

    let st = new Set();
    function solve(temp){
        if(temp.length === n) {
            result.push([...temp]);
            return;
        }
         for (let i = 0; i < n; i++) {
            if(!st.has(nums[i])){
                temp.push(nums[i]);
                st.add(nums[i]);
                solve(temp);
                temp.pop(nums[i]);
                st.delete(nums[i]);
            }
         }
    }
    solve([]);
    return result;
};

// swap i with idx else duplicate item will come

var permute = function(nums) {
    let result =[];
    let n = nums.length;

    function backtrack(idx){
        if(idx === n){
            return result.push([...nums]);
        }

        for(let i= idx; i< n; i++){
           [nums[i], nums[idx]] = [nums[idx], nums[i]];
            backtrack(idx+1);
            [nums[i], nums[idx]] = [nums[idx], nums[i]]; // undo
        }
    }
    backtrack(0);
    return result;
};