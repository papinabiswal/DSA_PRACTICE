// TC: O(n)
// SC: O(n)
var nthUglyNumber = function(n) {
    let id2 = 0;
    let id3 = 0;
    let id5 = 0;

    let uglyNumber =[1];

    while(uglyNumber.length < n){
        let val2 = uglyNumber[id2] * 2;
        let val3 = uglyNumber[id3] * 3;
        let val5 = uglyNumber[id5] * 5;

        let next = Math.min(val2, val3, val5);
        uglyNumber.push(next);

        if(next === val2) id2++;
        if(next === val3) id3++;
        if(next === val5) id5++;
    }
    return uglyNumber[n-1];
};