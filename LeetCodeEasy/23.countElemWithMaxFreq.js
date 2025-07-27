var maxFrequencyElements = function(nums) {
    let obj = {};
    let maxfreq = 0;
    for(let char of nums){
       obj[char] = (obj[char] || 0)+1;
       maxfreq = Math.max(obj[char], maxfreq);
    } 
    
    let count = 0;
    for(let key in obj){
        if(obj[key] === maxfreq){
            count += obj[key];
        }
    }
    return count;
};