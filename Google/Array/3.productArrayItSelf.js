// Brute Force
// TC: O(n^2)
// SC: O(n)
let productExceptSelf = function(nums) {

    let result =[];
    for(let i=0; i< nums.length; i++){
          let Prod = 1;
         for(let j=0; j< nums.length; j++){
              if(i !== j){
                  Prod *= nums[j];
              }
         }
         result.push(Prod);
    }
    return result;
};

// using / operator
// TC: O(n)
// SC: O(n)
let productExceptSelf1 = function(nums) {
    let zeroCount =0;
    let prodWithOutZero =1;
 
    // Step 1: Calculate product excluding zeros
    for(const element of nums){
         if(element === 0){
             zeroCount++;
         } else {
             prodWithOutZero *= element;
         }
    }
 
    let result =[];
    // Step 2: Build result array based on zero count
    for(let i=0; i< nums.length; i++){
       if(nums[i] !== 0){
            if(zeroCount > 0){
                result[i] = 0;
            } else {
                 result[i] = prodWithOutZero / nums[i];
            }
       } else {
           if(zeroCount > 1){
               result[i] = 0;
           } else {
               result[i] = prodWithOutZero;
           }
       }
    }
 
    return result;
 };

 // taking left array and right array product
 // TC: O(n)
 // SC: O(n)
 let productExceptSelf2 = function(nums) {
    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);
    const result = new Array(n);

    // Build left product array
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    // Build right product array
    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    // Final result = left[i] * right[i]
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }
    return result;
 }


 // Space Optimized, No Division
 let productExceptSelf3 = function(nums) {
    const n = nums.length;
     const result = new Array(n).fill(1);
 
     // Step 1: Left products
     for (let i = 1; i < n; i++) {
         result[i] = result[i - 1] * nums[i - 1];
     }
 
     // Step 2: Multiply with right products
     let right = 1;
     for (let i = n - 1; i >= 0; i--) {
         result[i] = result[i] * right;
         right *= nums[i];
     }
 
     return result;
 };
