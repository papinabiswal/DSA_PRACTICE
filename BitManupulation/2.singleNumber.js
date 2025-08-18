var singleNumber = function(nums) {
    let obj = {};
    for(let num of nums){
      obj[num] = (obj[num] || 0) + 1;
    }

    for(let num in obj){
       if(obj[num] === 1){
           return parseInt(num);
       }
    }
};

// nlogn
var singleNumber = function(nums) {
    nums.sort((a,b)=> a-b);
    for(let i =0; i< nums.length; i+= 3){
       if(nums[i] !== nums[i+1]){
          return nums[i];
       }
    }
};

// using bit mask
// read some logic

// Get Bit
// let 5 = "0101"
// find 2nd position which bit is there; let i = 2;
// 1 << i "0100" left shift of 1;
// do the and operation of "0101" & "0100" ;


// set Bit
// set means that position make 1;
// suppose we need to set bit position i =1;
// let n = 5 = "0101";
// 1 << i = 0010
// do the or operation of "0101" | "0010"


// clear bit
// clear bit means that position make the bit 0
// suppose we need to clear bit at position i = 2;
// let n = 5 = "0101";
//  1 << i = 0100
// then use tilde ~ (to make opposite) ~0100 =1011
//  do the and operation of "0101" & "1011" = 0001

// update bit
// suppose we need to update bit at pos i = 1 to 1;
// update bit is nothing but clear bit and set bit
// let n = 5 = "0101";
// 1 << i = 0010;
// ~0010 = 1101
// 1101 & num = 0101
// now set bit
// 1 << i = 0010
// 0101 | 0010 = 0111

var singleNumber = function(nums) {
    let result = 0;
    
    for(let i=0; i<32; i++){
        let temp = 1 << i;
        let countZeros = 0;
        let countOnes = 0;

       for(let num of nums){
          if((num & temp) !== 0){
             countOnes++;
          } else {
             countZeros++;
          }
       }
        if(countOnes % 3 === 1){
            result = (result | temp)
        }
    }
    return result;
};

// bit manipulation
// https://www.youtube.com/watch?v=cOFAmaMBVps
var singleNumber = function(nums) {
    let ones = 0;
    let twos = 0;

    for(let num of nums){
       ones = (ones ^ num) & ~twos;
       twos = (twos ^ num) & ~ones 
    }
    return ones;
};