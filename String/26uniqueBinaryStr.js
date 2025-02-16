//T.C : O(n)
//S.C : O(1)
function countBinaryStr(nums){
    let result = "";
    for(let i=0; i< nums.length; i++){
       let ch = nums[i][i];  // Get the diagonal character
       result += (ch === '0') ? "1" : "0"
    }
    return result;
 }
 countBinaryStr(["111","011","001"]);