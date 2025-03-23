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