// find first odd number number from right side;
// if odd number is present then return the string from 0 to that index;

// TC: O(n)  return num.substring(0, i+1); this line will be call in one time only.
// SC: O(1)


var largestOddNumber = function(num) {
    
    for(let i= num.length-1; i>=0; i--){
       if(num[i] % 2 !== 0){
            return num.substring(0, i+1);
       }
    }
    return "";
};