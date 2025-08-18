// check string length
// check the diff shouldn't greater than 2
// store the freqency
var areAlmostEqual = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    if(s1 === s2) return true;

    let diff = 0;
    let freq1 = new Array(26).fill(0);
    let freq2 = new Array(26).fill(0);

    for(let i=0; i< s1.length; i++){
        if(s1[i] !== s2[i]){
            diff++
        }
        if(diff > 2){
            return false;
        }
        freq1[s1.charCodeAt(i) - 97]++;
        freq2[s2.charCodeAt(i) - 97]++;
    }
    for(let i=0; i< 26; i++){
      if(freq1[i] !== freq2[i]){
           return false;
      }
    }
    return true;
};

// more optimal
var areAlmostEqual = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    if(s1 === s2) return true;

    let diff = 0;
    let firstIdx = 0;
    let lastIdx = 0;

    for(let i=0; i< s1.length; i++){
        if(s1[i] !== s2[i]){
            diff++;
        if(diff === 1){
            firstIdx = i;
        } else if(diff === 2) {
            lastIdx = i;
        } else {
            return false;
        }
        }
       
    }
    return s1[firstIdx] === s2[lastIdx] && s1[lastIdx] === s2[firstIdx];
};