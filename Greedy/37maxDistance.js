var maxDistance = function(arrays) {
    let n = arrays.length;
    let MIN = arrays[0][0];
    let MAX = arrays[0][arrays[0].length - 1];

    let result =0;

    for(let i=1; i< n; i++){
       let currMin = arrays[i][0];
       let currMax = arrays[i][arrays[i].length-1];

       result = Math.max(result, Math.abs(currMax-MIN), Math.abs(currMin-MAX));

       MIN = Math.min(MIN, currMin);
       MAX = Math.max(MAX, currMax);
    }
    return result;
};