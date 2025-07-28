// there will only two format either
// 0101
// 1010
// check the sting with these two format.
// 1st string in odd position 1 will be present
// 2nd string even position 1 will be present

var minOperations = function(s) {
    let countForAlternate0 = 0; // 0101...
    let countForAlternate1 = 0; // 1010..

    for(let i= 0; i< s.length; i++){
        if(i % 2 === 0){ // even index 0
           if(s[i] === '0'){
              countForAlternate1++;
           } else {
              countForAlternate0++;
           }
        } else { // odd idx 0
            if(s[i] === '1'){
                countForAlternate1++;
            } else {
                countForAlternate0++;
            }
        }
    }
    return Math.min(countForAlternate0, countForAlternate1);
};


// Target 1: "0101" (starts with 0)
// i=0: '0' ✅ ok

// i=1: '1' ✅ ok

// i=2: '0' ✅ ok

// i=3: '0' ❌ should be '1' → need 1 change

// ✅ countForAlternate0 = 1

// Target 2: "1010" (starts with 1)
// i=0: '0' ❌ should be '1'

// i=1: '1' ❌ should be '0'

// i=2: '0' ❌ should be '1'

// i=3: '0' ✅ ok

// ✅ countForAlternate1 = 3